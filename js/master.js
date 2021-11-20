function submit() {
    var output = document.getElementById('text_input').value;
    output = output.split('');

    display_hex_only(output);
    addCharacters(output);
}

function display_hex_only(characters) {
    var text = ""

    for (var i = 0; i < characters.length; i++) {
        text += " 0x" + characters[i].charCodeAt(0).toString(16);
    }

    document.getElementById('hex_only_string').innerHTML = text;
}

function remove_elements() {
    // Remove all elements from 'characters_container'
    var characters_container = document.getElementById('characters_container');
    characters_container.innerHTML = "";
}

function addCharacters(characters) {
    var parent_element = document.getElementById('characters_container');

    remove_elements();

    // For each characters
    for (var i = 0; i < characters.length; i++) {

        var text = characters[i] + " \t0x" + characters[i].charCodeAt(0).toString(16) + " \t0b0" + characters[i].charCodeAt(0).toString(2);

        var child_child_element = document.createElement("p");
        child_child_element.innerHTML = text;

        var child_element = document.createElement("div");
        child_element.classList.add("character_class");

        child_element.append(child_child_element);
        parent_element.append(child_element);
    }

}
