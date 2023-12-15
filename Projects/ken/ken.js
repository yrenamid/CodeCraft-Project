document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate-btn');
    const clearBtn = document.getElementById('clear-btn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResult = document.getElementById('bmi-result');
    const bmiClassification = document.getElementById('bmi-classification');
    const tipsList = document.getElementById('tips-list');
    let audio = null;

    calculateBtn.addEventListener('click', () => {
        calculateBMI();
        playAudio();
    });

    clearBtn.addEventListener('click', () => {
        clearFields();
        stopAudio();
    });

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100;

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter valid values for weight and height.');
            return;
        }

        const bmi = calculateBMIValue(weight, height);
        displayResult(bmi);
    }

    function calculateBMIValue(weight, height) {
        return (weight / (height * height)).toFixed(2);
    }

    function displayResult(bmi) {
        const classification = getBMIClassification(bmi);
        const tips = getBMITips(classification);

        bmiResult.textContent = `Your BMI is: ${bmi}`;
        bmiClassification.textContent = `Classification: ${classification}`;
        displayTips(tips); // Display tips in an organized list format
    }

    function getBMIClassification(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }

    function getBMITips(classification) {
        switch (classification) {
            case 'Underweight':
                return `Tips for gaining weight:
                1. Balanced Diet: Focus on nutrient-dense foods from all food groups.
                2. Increased Caloric Intake: Consume slightly larger portions or add healthy snacks.
                3. Eat Frequently: Consider 5-6 smaller meals throughout the day.
                4. Protein Intake: Ensure adequate protein from sources like chicken, fish, nuts, and legumes.
                5. Healthy Fats: Include avocados, nuts, seeds, and olive oil in your diet.
                6. Strength Training: Combine increased calorie intake with strength-building exercises.
                7. Avoid Empty Calories: Prioritize nutritious foods over processed or sugary items.
                8. Stay Hydrated: Drink enough water throughout the day without filling up before meals.
                9. Consult a Professional: Seek guidance from a registered dietitian or nutritionist.
                10. Monitor Progress: Keep track of weight gain but focus on overall health and well-being.`;

            case 'Normal weight':
                return `Maintaining a healthy weight within the normal range involves the following practices:
                1. Balanced Diet: Prioritize a nutritious diet emphasizing whole foods like fruits, vegetables, lean proteins, whole grains, and healthy fats.
                2. Portion Control: Be mindful of portion sizes to prevent overeating and maintain a healthy balance.
                3. Regular Exercise: Stay physically active with at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity weekly, coupled with strength training exercises twice a week.
                4. Mindful Eating: Pay attention to hunger and fullness cues, eat slowly, and avoid distractions during meals to prevent overeating.
                5. Stay Hydrated: Drink plenty of water to support overall health and avoid mistaking thirst for hunger.
                6. Quality Sleep: Aim for 7-9 hours of quality sleep per night to support a healthy metabolism.
                7. Stress Management: Practice stress-relieving activities to prevent emotional eating or unhealthy habits.
                8. Regular Health Check-Ups: Visit your healthcare provider for routine check-ups to monitor overall health indicators.
                9. Healthy Lifestyle Choices: Avoid smoking, limit alcohol, and maintain a healthy work-life balance.
                10. Mind-Body Wellness: Engage in activities promoting mental and emotional well-being, like mindfulness or spending time with loved ones.`;

            case 'Overweight':
                return `Tips for managing weight:
                1. Balanced Diet: Focus on a balanced diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats.
                2. Portion Control: Be mindful of portion sizes to avoid excessive calorie intake.
                3. Regular Exercise: Engage in regular physical activity to burn calories and improve overall fitness.
                4. Healthy Snacking: Opt for healthy snacks like fruits, nuts, or yogurt to curb hunger between meals.
                5. Mindful Eating: Listen to your body's hunger signals and avoid emotional eating or bingeing.
                6. Stay Hydrated: Drink water throughout the day to stay hydrated and avoid mistaking thirst for hunger.
                7. Stress Management: Manage stress through relaxation techniques or activities you enjoy to prevent stress-related overeating.
                8. Professional Guidance: Consider seeking advice from a healthcare professional or nutritionist for personalized guidance.
                9. Monitor Progress: Keep track of your weight loss journey but focus on gradual and sustainable changes.
                10. Lifestyle Changes: Incorporate healthy habits into your daily routine for long-term weight management.`;

            case 'Obese':
                return `Dealing with obesity requires a multifaceted approach. Here are some tips to manage obesity:
                1. Seek Professional Guidance: Consult with healthcare providers or dietitians for a personalized plan tailored to your health conditions and weight loss goals.
                2. Healthy Eating Habits: Focus on a balanced diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats. Portion control is crucial.
                3. Regular Physical Activity: Include a mix of aerobic exercises and strength training to burn calories and build muscle mass.
                4. Behavioral Changes: Address emotional eating habits and identify triggers. Develop alternative coping mechanisms like meditation or counseling.
                5. Monitor Progress: Track your progress focusing on overall health improvements, not just the number on the scale.
                6. Gradual Changes: Implement sustainable lifestyle changes rather than drastic measures for lasting results.
                7. Stay Hydrated: Drink plenty of water as thirst can sometimes be mistaken for hunger.
                8. Get Adequate Sleep: Aim for 7-9 hours per night to regulate hunger hormones.
                9. Support System: Engage with a supportive community or program for encouragement and motivation.
                10. Medical Intervention: Consider medical advice if needed, but explore lifestyle changes as the primary approach.`;

            default:
                return '';
        }
    }

    function displayTips(tips) {
        tipsList.innerHTML = ''; // Clear previous tips

        const tipsArray = tips.split('\n').filter(tip => tip.trim() !== '');

        tipsArray.forEach(tip => {
            const listItem = document.createElement('li');
            listItem.textContent = tip.trim();
            tipsList.appendChild(listItem);
        });
    }

    function playAudio() {
        audio = new Audio('aq.mp3');
        audio.play();
    }

    function stopAudio() {
        if (audio !== null) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    function clearFields() {
        weightInput.value = '';
        heightInput.value = '';
        bmiResult.textContent = '';
        bmiClassification.textContent = '';
        tipsList.innerHTML = '';
    }
});