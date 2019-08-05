import {
  interactor,
  isPresent,
  clickable,
  collection,
  text,
  isVisible,
} from '@bigtest/interactor';

@interactor class Button {
  isDisplayed = isVisible();
  click = clickable();
}

@interactor class NotesAccordion {
  udpNotesAccordionIsDisplayed = isPresent('#notesAccordion');

  assignButtonDisplayed = isPresent('[data-test-notes-accordion-assign-button]');
  newButtonDisplayed = isPresent('[data-test-notes-accordion-new-button]');

  newButton = new Button('[data-test-notes-accordion-new-button]');
  assignButton = new Button('[data-test-notes-accordion-assign-button]');

  notesListIsDisplayed = isPresent('#notes-list');
  notes = collection('#notes-list [class^="mclRow"]', {
    click: clickable(),
    title: text('[class^="mclCell":last-child]'),
  });
}

export default NotesAccordion;
