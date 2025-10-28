const FRUIT_FACTS = {
  apple: {
    nutrition: {
      calories: "95 kcal",
      fiber: "4.5g",
      vitamin_c: "14% DV"
    },
    facts: [
      "Apples float in water because they are 25% air",
      "There are over 7,500 varieties of apples grown worldwide",
      "The science of apple growing is called pomology"
    ],
    benefits: [
      "Supports heart health",
      "Helps maintain healthy blood sugar levels",
      "Rich in antioxidants"
    ],
    season: "Best from September to November"
  },
  banana: {
    nutrition: {
      calories: "105 kcal",
      fiber: "3.1g",
      potassium: "422mg"
    },
    facts: [
      "Bananas are berries, but strawberries aren't!",
      "They naturally produce a happy hormone called serotonin",
      "Wild bananas have large seeds and little flesh"
    ],
    benefits: [
      "Great source of quick energy",
      "Supports muscle function",
      "Aids in digestion"
    ],
    season: "Available year-round"
  },
  lemon: {
    nutrition: {
      calories: "20 kcal",
      fiber: "2.4g",
      vitamin_c: "51% DV"
    },
    facts: [
      "One tree can produce up to 600 pounds of lemons per year",
      "They were once used to combat scurvy in sailors",
      "Ancient Romans believed lemons could neutralize poison"
    ],
    benefits: [
      "Boosts immune system",
      "Aids in iron absorption",
      "Supports skin health"
    ],
    season: "Peak season from November to March"
  },
  apple_smoothie: {
    nutrition: {
      calories: "120 kcal",
      fiber: "3.2g",
      vitamin_c: "18% DV",
      protein: "2.1g"
    },
    facts: [
      "Smoothies retain more nutrients than juicing",
      "Apple smoothies are great for pre-workout energy",
      "The fiber in apples helps slow sugar absorption"
    ],
    benefits: [
      "Quick and convenient nutrition",
      "Supports digestive health",
      "Great source of natural energy"
    ],
    season: "Available year-round"
  },
  banana_smoothie: {
    nutrition: {
      calories: "150 kcal",
      fiber: "2.8g",
      potassium: "380mg",
      protein: "3.2g"
    },
    facts: [
      "Banana smoothies are perfect post-workout recovery drinks",
      "The natural sugars provide quick energy",
      "Bananas help thicken smoothies naturally"
    ],
    benefits: [
      "Excellent for muscle recovery",
      "Supports heart health",
      "Natural energy boost"
    ],
    season: "Available year-round"
  },
  lemon_smoothie: {
    nutrition: {
      calories: "45 kcal",
      fiber: "1.8g",
      vitamin_c: "65% DV",
      protein: "1.2g"
    },
    facts: [
      "Lemon smoothies are incredibly refreshing",
      "Perfect for detox and cleansing",
      "The acidity helps with digestion"
    ],
    benefits: [
      "Boosts immune system",
      "Aids in detoxification",
      "Supports healthy skin"
    ],
    season: "Available year-round"
  },
  tropical_smoothie: {
    nutrition: {
      calories: "180 kcal",
      fiber: "4.2g",
      vitamin_c: "45% DV",
      protein: "2.8g"
    },
    facts: [
      "Tropical smoothies combine multiple fruit benefits",
      "Perfect for summer refreshment",
      "The combination provides balanced nutrition"
    ],
    benefits: [
      "Rich in multiple vitamins",
      "Supports immune system",
      "Great for hydration"
    ],
    season: "Available year-round"
  },
  green_smoothie: {
    nutrition: {
      calories: "110 kcal",
      fiber: "5.1g",
      vitamin_c: "35% DV",
      protein: "2.5g"
    },
    facts: [
      "Green smoothies pack maximum nutrition",
      "Perfect way to get your daily greens",
      "The apple and banana balance the green taste"
    ],
    benefits: [
      "Maximum nutrient density",
      "Supports overall health",
      "Great for weight management"
    ],
    season: "Available year-round"
  },
  citrus_smoothie: {
    nutrition: {
      calories: "85 kcal",
      fiber: "3.8g",
      vitamin_c: "70% DV",
      protein: "1.8g"
    },
    facts: [
      "Citrus smoothies are vitamin C powerhouses",
      "Perfect for morning energy",
      "The combination is naturally sweet"
    ],
    benefits: [
      "Immune system support",
      "Antioxidant rich",
      "Supports collagen production"
    ],
    season: "Available year-round"
  }
};

function getFruitFacts(fruit) {
  return FRUIT_FACTS[fruit] || null;
}

function createFactsSection(fruit) {
  const facts = getFruitFacts(fruit);
  if (!facts) return '';

  return `
    <div class="facts-section">
      <div class="facts-nutrition">
        <h3>Nutrition Facts</h3>
        <div class="nutrition-grid">
          <div class="nutrition-item">
            <span class="nutrition-value">${facts.nutrition.calories}</span>
            <span class="nutrition-label">Calories</span>
          </div>
          <div class="nutrition-item">
            <span class="nutrition-value">${facts.nutrition.fiber}</span>
            <span class="nutrition-label">Fiber</span>
          </div>
          ${facts.nutrition.vitamin_c ? `
            <div class="nutrition-item">
              <span class="nutrition-value">${facts.nutrition.vitamin_c}</span>
              <span class="nutrition-label">Vitamin C</span>
            </div>
          ` : `
            <div class="nutrition-item">
              <span class="nutrition-value">${facts.nutrition.potassium}</span>
              <span class="nutrition-label">Potassium</span>
            </div>
          `}
          ${facts.nutrition.protein ? `
            <div class="nutrition-item">
              <span class="nutrition-value">${facts.nutrition.protein}</span>
              <span class="nutrition-label">Protein</span>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="facts-benefits">
        <h3>Health Benefits</h3>
        <ul class="benefits-list">
          ${facts.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
      </div>

      <div class="fun-facts">
        <h3>Fun Facts</h3>
        <div class="facts-carousel">
          ${facts.facts.map(fact => `
            <div class="fact-card">
              <p>${fact}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="season-info">
        <h3>Best Season</h3>
        <p>${facts.season}</p>
      </div>
    </div>
  `;
}

// Initialize facts carousel
function initFactsCarousel() {
  const cards = document.querySelectorAll('.fact-card');
  let currentCard = 0;

  function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
  }

  function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  }

  // Show first card and start rotation
  if (cards.length > 0) {
    showCard(0);
    setInterval(nextCard, 5000); // Rotate every 5 seconds
  }
} 