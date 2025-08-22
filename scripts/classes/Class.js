export default class Class {
  constructor() {
    
  }

  name = 'Martyr';
  sourceBook = `Elib's Journal of Nothing`;

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
  }

  extraFeaturesTable = [ // These are extra columns that will be addded onto the default class feature table
    {
      name: "Spell Level Casting Ability",
      values: [] // Length should be 9
    }
  ]

  features = [
    {
      name: "Spellcasting",
      lvl: 2,
      flavor: "You have learned You delve deeper into what you can do with the power of life",
      content: [
        {
          name: 'Cantrips',
          paragraphs: [
            'You know two cantrips of your choice from the Martyr Spell list.',
            'Whenever you gain a Martyr level, you can replace one of your cantrips with another cantrip of your choice from the Martyr spell list',
            'When you reach Martyr levels 4 and 10, you learn another Martyr cantrip of the choice, as shown in the Cantrips column of the Martyr Features table'
          ]
        },
      ]
    }

  ]

  initiate() {
    document.querySelector('.js-class-title').innerHTML = `${this.name}`
    document.querySelector('.js-source-book').innerHTML = `Source: ${this.sourceBook}`;
    document.querySelector('.js-class-flavor-container').innerHTML = `
    <p class="class-flavor-title class-feature-title">${this.name} Class Flavor</p>
    <div class="class-flavor class-feature-border">
      <p>
        Every Martyr seeks and embraces the powers hidden within their own body and of others. They are usually the most
        logcial and methodical peoples of the world. They study the body and soul and find powers no other would have
        normally found.
      </p>
      <p>
        They draw powers from a life force, or physical body, but are known to draw it from themselves alone.
      </p>
      <p>
        They get their name from their self sacrificial history. Many sacrifice themselves for the greater good, but
        some use it for themselves, or for other dark schemes.
      </p>
    </div>`
    document.querySelector('.js-core-class-traits-table').innerHTML = `
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
        <td>${this.getFormattedStartingEquipment()}</td>
      </tr>`
    document.querySelector('.js-')
  }
  getFormattedStartingEquipment() {
    let formattedStartingEquipment = '<i>Choose A or B:</i> <br>';
    let c = 'A';
    this.coreClassTraits.startingEquipment.forEach((v, i) => {
      formattedStartingEquipment += `(${String.fromCharCode(c.codePointAt(0) + i)}): ${v}, or `;
    });
    return formattedStartingEquipment.slice(0, formattedStartingEquipment.length -5);
  }
}