export default class Class {
  constructor() {

  }

  name = 'Martyr';
  sourceBook = `Elib's Journal of Nothing`;
  flavorParagraphs = [ // Each element is a paragraph
    'Every Martyr seeks and embraces the powers hidden within their own body and of others. They are usually the most logcial and methodical peoples of the world.They study the body and soul and find powers no other would have normally found.',
    'They draw powers from a life force, or physical body, but are known to draw it from themselves alone.',
    'They get their name from their self sacrificial history. Many sacrifice themselves for the greater good, but some use it for themselves, or for other dark schemes.'

  ];
  coreClassTraits = {
    primaryAbility: "Intelligence and Constitution",
    hitPointDie: 12,
    proficiencies: {
      savingThrows: "Intelligence and Constitution",
      skills: {
        choices: 2,
        options: [
          "Arcana",
          "Athletics",
          "History",
          "Intimidation",
          "Investigation",
          "Medicine",
          "Perception",
          "Survival"
        ]
      },
      weapons: "Simple weapons"
    },
    armorTraining: "None",
    startingEquipment: [
      "Nothing",
      "75 GP"
    ]
  };
  defaultTableFeatures = [
    {
      name: 'Level',
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
      name: 'Proficiency Bonus',
      values: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]
    },
    {
      name: 'Class Features',
      values: ['', '', '', 'Ability Score Improvement', '', '', '', 'Ability Score Improvement', '', '', '', 'Ability Score Improvement', '', '', '', 'Ability Score Improvement','', '', 'Epic Boon', '']
    }
  ]
  classSpecificTableFeatures = [ // These are extra columns that will be addded onto the default class feature table
    {
      name: "Spell Level Casting Ability",
      values: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9] // Length should be 20
    }
  ];

  features = [
    {
      name: "Spellcasting",
      lvl: 1,
      flavor: "You have learned You delve deeper into what you can do with the power of life",
      content: [
        {
          name: 'Cantrips',
          paragraphs: [
            'You know two cantrips of your choice from the Martyr Spell list.',
            'Whenever you gain a Martyr level, you can replace one of your cantrips with another cantrip of your choice from the Martyr spell list.',
            'When you reach Martyr levels 4 and 10, you learn another Martyr cantrip of the choice, as shown in the Cantrips column of the Martyr Features table.'
          ]
        },
        {
          name: 'Spell Level Slot Casting Ability',
          paragraphs: [
            'The Martyr Features table shows what spell level you can cast a martyr spell.'
          ]
        },
        {
          name: 'Prepared Spells of Level 1+.',
          paragraphs: [
            "You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Martyr spell list. _______, ______, ____________, and ________ are recommended.",

            "The number of spells on your list increases as you gain Martyr levels, as shown in the Prepared Spells column of the Martyr Features table. Whenever that number increases, choose additional spells from the Martyr spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Martyr, your list of prepared spells can include six spells of levels 1 and 2 in any combination.",

            "If another Martyr feature gives you spells that you always have prepared, those spells don't countagainst the number of spells you can prepare with this feature, but those spells otherwise count asDruid spells for you."
          ]
        }
      ]
    },
    {
      name: "Harnessing",
      lvl: 2,
      flavor: "Every Martyr level you gain a beholding choose between Body, Soul or Mind.",
      content: [
        {
          paragraphs: [
            'You can harness one of the following  of your choice'
          ]
        },
        {
          name: 'Body',
          paragraphs: [
            'You will learn to harness the power of the flesh and blood.'
          ]
        },
        {
          name: 'Soul',
          paragraphs: [
            'You will learn to harness powers of the soul and spirit.'
          ]
        },
        {
          name: 'Mind',
          paragraphs: [
            'You will learn to harness powers of the mind and intellect.',
            'This '
          ]
        }
      ]
    },
    
  ];

  initiate() {
    document.getElementsByTagName('title')[0].innerHTML = `${this.name} Class`;
    document.querySelector('.js-main-container').innerHTML = `
      <div class="js-light-dark-theme-btn light-dark-theme-btn"></div>
      <div class="class-title-bar">
        <span>${this.name}</span>
      </div>
      <span class="source-book">Source: ${this.sourceBook}</span>

      <div class="class-lore-class-core-traits-container">
        <div class="class-flavor-container">
          <p class="class-flavor-title class-feature-name">${this.name} Class Flavor</p>
          <div class="class-flavor class-feature-border">
            ${this.getClassFlavorHTML()}
          </div>
        </div>
        <div class="core-class-traits-table-container">
          <p class="core-class-traits-table-title class-feature-name">
            Core Martyr Traits
          </p>
          <table class="js-core-class-traits-table core-class-traits-table class-feature-border">
            <tr>
              <td><b>Primary Ability</b></td>
              <td>${this.coreClassTraits.primaryAbility}</td>
            </tr>
            <tr>
              <td><b>Hit Point Die</b></td>
              <td>D${this.coreClassTraits.hitPointDie} per ${this.name} Level</td>
            </tr>
            <tr>
              <td><b>Saving Throw Proficiencies</b></td>
              <td>${this.coreClassTraits.proficiencies.savingThrows}</td>
            </tr>
            <tr>
              <td><b>Skill Proficiencies</b></td>
              <td>
                <i>Choose ${this.coreClassTraits.proficiencies.skills.choices}:</i>
                <br>
                ${this.coreClassTraits.proficiencies.skills.options.join(', ')}
              </td>
            </tr>
            <tr>
              <td><b>Weapon Proficiencies</b></td>
              <td>${this.coreClassTraits.proficiencies.weapons}</td>
            </tr>
            <tr>
              <td><b>Armor Training</b></td>
              <td>${this.coreClassTraits.armorTraining}</td>
            </tr>
            <tr>
              <td><b>Starting Equipment</b></td>
              <td>${this.getStartingEquipmentHTML()}</td>
            </tr>
          </table>
        </div>
      </div>

    <div class="class-features-container">
      <span class="class-features-title">${this.name} Class Features</span>
      ${this.getClassFeaturesHTML()}
    </div>
  </div>`;
  }
  getStartingEquipmentHTML() {
    let formattedStartingEquipment = '<i>Choose A or B:</i><br>';
    let c = 'A';
    this.coreClassTraits.startingEquipment.forEach((v, i) => {
      formattedStartingEquipment += `(${String.fromCharCode(c.codePointAt(0) + i)}) ${v}, or `;
    });
    return formattedStartingEquipment.slice(0, formattedStartingEquipment.length - 5);
  }
  getClassFlavorHTML() {
    let html = '';
    this.flavorParagraphs.forEach((e, i) => {
      html += `<p>${e}</p>`;
    });
    return html;
  }
  getClassFeaturesHTML() {
    let html = '';
    let featureLvls = [this.features[0].lvl];
    for (let i = 0; i < this.features.length; i++) {
      for (let j = 0; j < featureLvls.length; j++) {
        if (featureLvls[j] != this.features[i].lvl) {
          featureLvls.push(this.features[i].lvl);
        }
      }
    }
    for (let lvl = 1; lvl <= 20; lvl++) {
      if (!featureLvls.includes(lvl)) {
        console.log('nope. not lvl: ' + lvl);
        continue;
      }
      html += `
        <div class="class-level-intro">
          <span class="class-features-level-section">Level ${lvl}</span>
        </div>`;
      for (let i = 0; i < this.features.length; i++) {
        if (this.features[i].lvl != lvl) {
          continue;
        }
        
        html += '<div class="class-feature class-feature-border">';
        html += `
        <div class="class-feature-name">
          ${this.features[i].name}:
        </div>`;

        for (let j = 0; j < this.features[i].content.length; j++) {
          html += '<br>'
          if (this.features[i].content[j].name != undefined) {
            html += `<i><b>${this.features[i].content[j].name}</b></i><br>`;
          } else {
            console.log(`no name for paragraph "${j}" of feature: ${this.features[i]}`);
          }
          html += `${this.features[i].content[j].paragraphs.join('<br>')}<br>`;
        }
        html += '</div>'
      }
    }
    return html;
  }
  getClassFeaturesTableHTML() {
    let html = '<table>';
    for (let i = 0; i < this.features.length; i++) {
      `
      <th>Level</th>
      <tr>
        <td>1</td>
      </tr>
      `
    }
    html += '</table>'
  }
}