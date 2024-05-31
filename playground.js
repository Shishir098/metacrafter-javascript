/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


class NFT {
    constructor() {
      this.id = Math.random().toString(36).substr(2, 9);
      this.eyeColor = this.getRandom("Blue", "Brown", "Green");
      this.shirtType = this.getRandom("T-Shirt", "Hoodie", "Jacket");
      this.bling = this.getRandom("Gold", "Silver", "Platinum");
    }
  
    getRandom(...options) {
      return options[Math.floor(Math.random() * options.length)];
    }
  
    printMetadata() {
      console.log(`ID: ${this.id}`);
      console.log(`Eye Color: ${this.eyeColor}`);
      console.log(`Shirt Type: ${this.shirtType}`);
      console.log(`Bling: ${this.bling}`);
      console.log("------------------------");
    }
  }
  
  let nfts = [];
  for (let i = 0; i < 5; i++) {
    nfts.push(new NFT());
  }
  
  nfts.forEach(nft => nft.printMetadata());
