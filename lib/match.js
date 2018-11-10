class Person {
 constructor(id, name, gender, age, ethnicity, keywords, location) {
   this.id = id;
   this.name = name;
   this.gender = gender;
   this.age = age;
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
  
 getAge() {
  return this.age;
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
    for(var i = 0;i<data.length;i++){
      person = new Person(data[i].ID,data[i].Name,data[i].Gender,data[i].Age,data[i].Ethnicity, data[i].Keywords, data[i].Location);
      let s = calculateScore(person);
      if(s>score){
        match = person;
        score = s;
      }
    }
    return match;
      
  }
  
 calculateScore(person) {
   var matchingScore = 0;
   if (person.getGender() == this.getGender()) {
    matchingScore += 2;
   }
   if (person.getEthinicity() == this.getEthinicity()) {
    matchingScore += 3.5;
   }
   matchingScore -= Math.abs(this.getAge() - person.getAge()) * 0.5;
   var matchingKeyword = person.getKeywords();
   matchingKeyword.forEach(function(keyword) {
     if (this.keywords.includes(keyword)) {
       matchingScore += 7.5;
     }
   });
   var thisLocation = this.getLocation();
   var otherLocation = person.getLocation();
   matchingScore -= 0.01 * get_distance_from_latlon(thisLocation["Lat"], thisLocation["Lon"], otherLocation["Lat"], otherLocation["Lon"]);
   return matchingScore;
 }
} 