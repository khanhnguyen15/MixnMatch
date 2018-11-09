class Person {
 constructor(id, name, gender, ethnicity, keywords, location) {
   this.id = id;
   this.name = name;
   this.gender = gender;
   this.ethnicity = ethnicity;
   this.keywords = keywords;
   this.location = location;
 }
  
 setKeyword(newKeyword) {
   this.keywords = newKeyword;
 }
 
 setLocation(newLocation) {
   this.location = newLocation;
 }
 
 getId() {
   return this.id;
 }
  
 getName() {
   return this.name;
 }
  
 getGender() {
   return this.gender;
 }
  
 getEthnicity() {
   return this.ethnicity;
 }
  
 getKeywords() {
   return this.keywords;
 }
  
 getLocation() {
   return this.location;
 }
  findclosestmatch(data){
    var score = 0;
    var match; // Closest match
    for(i = 0;i<data.length;i++){
      person = new Person(data[i].Id,data[i].Name,data[i].Gender,data[i].Ethnicity, data[i].keywords
      
  }
  
 calculateScore(person) {
   var matchingScore = 0;
 }
} 