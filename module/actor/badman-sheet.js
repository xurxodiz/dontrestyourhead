/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class DRYHBadmanSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dontrestyourhead", "sheet", "actor", "badman"],
      template: "systems/dontrestyourhead/templates/actor/badman-sheet.html",
      width: 600,
      height: 900,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "looks" }]
    });
  }
}
