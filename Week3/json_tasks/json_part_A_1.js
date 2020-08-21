/**
Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
Write a code to get the below details of Fluffyy so that
I can take him to vet.
 * 
 */

var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}

console.log(cat);

/**
 * Add height and weight to Fluffy
 */

 console.log("\nAdd Height & Weight to Fluffy cat object\n");
 cat.height = '1ft'
 cat.weight = '40kg'



/**
 * Fluffy name is spelled wrongly. Update it to Fluffyy 
 */
console.log("\nFluffy name is spelled wrongly. Update it to Fluffyy\n")
 cat.name ="Fluffyy"
 console.log(cat);

 /**
  * List all the activities of Fluffyy’s catFriends.
  */

 console.log("\nList all the activities of Fluffyy’s catFriends.\n")
 cat.catFriends.forEach((item)=>{
    console.log(item.activities)
 })

 /**
  * Print the catFriends names.
  */

 console.log("\nPrint the catFriends names.\n")
 cat.catFriends.forEach((item)=>{
    console.log(item.name)
 })

 /**
  * Print the total weight of catFriends
  */

 console.log("\nPrint the total weight of catFriends\n")
 let total=0
 cat.catFriends.forEach((item)=>{
  
    total += parseInt(item.weight);
    
 })
 console.log("Total weight of catfriends is ",total)

 /**
  * Print the total activities of all cats (op:6)
  */
 console.log("\nPrint the total activities of all cats (op:6)\n")
 let count=0;
 cat.activities.forEach((item)=>{
    count += 1;
    console.log("Fluffyy’s activities are ",item)
 })
 

 for(var i=0;i<cat.catFriends.length;i++)
{
    friend_details=cat['catFriends'][i]['activities']
    //console.log(friend_details)
    
    friend_details.map((data)=>{
        count += 1
        console.log(cat['catFriends'][i].name + " activities are "+data)
    })
	
}
console.log("Total activities of all cats are --",count)

/**
 * Add 2 more activities to bar & foo cats
 */

console.log("\nAdd 2 more activities to bar & foo cats\n")

cat.catFriends[0].activities.push("Eats chicken")
cat.catFriends[0].activities.push("Drinks milk")

cat.catFriends[1].activities.push("Eats eggs")
cat.catFriends[1].activities.push("Drinks water")

console.log("Updated cat details -->",cat.catFriends)

/**
 * Update the fur color of bar
 */

console.log("\nUpdate the fur color of bar\n");
cat.catFriends[0].furcolor='black'
console.log(cat)