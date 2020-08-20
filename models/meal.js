class Meal {
    constructor(
        id,
        categoryIds,
        title,
         affordability,
         complexity,
         imageUrl,
         duration,
         ingrediants,
         steps,
         isGlutenFree,
         isVigan,
         isVegeterian,
         isLactoseFree){
             this.id = id;
             this.categoryIds = categoryIds;
             this.title = title;
             this.affordability  = affordability;
             this.complexity = complexity;
             this.imageUrl = imageUrl;
             this.duration = duration;
             this.ingrediants = ingrediants;
             this.steps = steps;
             this.isGlutenFree = isGlutenFree;
             this.isVigan = isVigan;
             this.isVegeterian = isVegeterian;
             this.isLactoseFree = isLactoseFree;
         }
}

export default Meal;