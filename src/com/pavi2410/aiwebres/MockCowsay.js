function cowsay(message) {
    let cowsay = "";

    // Determine quote line length
    let longestLineLength = -1;
    const textLines = message.split("\n");
    for (let line of textLines) {
        let lineLength = line.length;
        if (lineLength > longestLineLength) {
            longestLineLength = lineLength;
        }
    }

    // Draw top of bubble text
    cowsay += " ";
    for (let i = 0; i < longestLineLength; ++i) {
        cowsay += '_';
    }
    cowsay += '\n';

    // Draw Quote
    for (let line of textLines) {
        cowsay += "(";
        cowsay += line;

        let padding = longestLineLength - line.length;
        for (let i = 0; i < padding; ++i) {
            cowsay += " ";
        }

        cowsay += ")\n";
    }

    // Draw bottom of bubble
    cowsay += " ";
    for (let i = 0; i < longestLineLength; ++i) {
        cowsay += '-';
    }
    cowsay += '\n';

    // Draw cow
    cowsay += "    \\   ^__^\n";
    cowsay += "     \\  (oo)\\_______\n";
    cowsay += "        (__)\\       )\\/\\\n";
    cowsay += "            ||----w |\n";
    cowsay += "            ||     ||\n";

    return cowsay;
}

class MockCowsay extends MockVisibleExtension {
    static TYPE = "Cowsay"

    constructor(editor) {
        super(editor, MockCowsay.TYPE)

        this.label = document.createElement("pre")

        this.initComponent(this.label)
    }

    onCreateFromPalette() {
        this.changeProperty("Say", "Moo")
    }

    onPropertyChange(propertyName, newValue) {
        super.onPropertyChange(propertyName, newValue)

        switch (propertyName) {
            case "Say":
                this.label.innerText = cowsay(newValue)
                break
        }
    }

    static create(editor) {
        return new MockCowsay(editor)
    }
}

MockComponentRegistry.register(MockCowsay.TYPE, MockCowsay.create)
