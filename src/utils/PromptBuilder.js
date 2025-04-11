

export const PromptBuilder = (data)=>{
    return `
    Given the following user health data:
    - Age: ${data.age}
    - Weight: ${data.weight}kg
    - Height: ${data.height}cm
    - Diet type : ${data.dietType}
    - Diet: ${data.diet}
    - gender: ${data.gender}
    - Physical activity: ${data.physical}
    - Health concerns: ${data.concerns || 'None'}
    Please include:
    1. A summary of the user's health profile.
    2. Recommended calorie intake.
    3. A full-day meal plan (breakfast, lunch, dinner, snacks).
    4. Explanations for each food choice.
    5. Tips for maintaining long-term health.
    6. users health stats like bmi,estimated calorie taken,weight category(overweight,under-weight)etc.

    Make sure the advice is easy to follow, practical, and well-formatted.

    I will directly print your output so please give answer in presentable format.
    dont use ** 

    Suggest a daily diet plan and basic health tips for this person.
    Also give a small tabulated data including stats like bmi etc.
    do not use more than 100-120 words.
    `
}