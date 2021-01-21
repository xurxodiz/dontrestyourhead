// Import Modules
import { DRYHActor } from "./actor/actor.js";
import { DRYHActorSheet } from "./actor/actor-sheet.js";
import { DRYHItem } from "./item/item.js";
import { DRYHItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.dontrestyourhead = {
    DRYHActor,
    DRYHItem
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
  CONFIG.Actor.entityClass = DRYHActor;
  CONFIG.Item.entityClass = DRYHItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dontrestyourhead", DRYHActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("dontrestyourhead", DRYHItemSheet, { makeDefault: true });

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