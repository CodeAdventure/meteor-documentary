
function setDocletNameToValue(doclet, tag) {
  if (tag.value && tag.value.description) { // as in a long tag
    doclet.addTag('name', tag.value.description);
  }
  else if (tag.text) { // or a short tag
    doclet.addTag('name', tag.text.replace(/\"/g , ""));
  }
}

exports.defineTags = function(dictionary) {

  dictionary.defineTag('class', {

    onTagged: function(doclet, tag) {

      doclet.addTag('kind', 'class');
      doclet.addTag('name', tag.text.replace(/\"/g , ""));
    }
  });

  dictionary.defineTag('initialize', {

    onTagged: function(doclet, tag) {

      doclet.addTag('description', tag.value);

    }

  });

};