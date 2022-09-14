
pragma solidity ^0.8.7;
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ERC721.sol";



contract Color is ERC721 {
    // storing the colors
    string [] public colors;
    // giving the token ID
    uint tokenId = 0;
    // check the color already exist or not
    mapping(string => bool) _colorExists;

    constructor() ERC721("Color", "CLR") public { 
    }

    function mint(string memory _color ) public {
        /**
         * Require unique color
         * Color - add it
         * Call mint function
         * Color - track it
         */
        require(!_colorExists[_color], "Color already exists");
        tokenId += 1;
        colors.push(_color);
        _mint(msg.sender, tokenId);
        _colorExists[_color] = true;
        

    }

}