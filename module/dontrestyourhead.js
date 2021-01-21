// Import Modules
import { DontRestYourHeadActor } from "./actor/actor.js";
import { DontRestYourHeadActorSheet } from "./actor/actor-sheet.js";
import { DontRestYourHeadItem } from "./item/item.js";
import { DontRestYourHeadItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.dontrestyourhead = {
    DontRestYourHeadActor,
    DontRestYourHeadItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = DontRestYourHeadActor;
  CONFIG.Item.entityClass = DontRestYourHeadItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dontrestyourhead", DontRestYourHeadActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("dontrestyourhead", DontRestYourHeadItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});