package com.pavi2410;

import android.view.View;
import android.widget.TextView;
import com.google.appinventor.components.annotations.DesignerComponent;
import com.google.appinventor.components.annotations.DesignerProperty;
import com.google.appinventor.components.annotations.SimpleFunction;
import com.google.appinventor.components.annotations.SimpleObject;
import com.google.appinventor.components.annotations.SimpleProperty;
import com.google.appinventor.components.common.ComponentCategory;
import com.google.appinventor.components.runtime.AndroidViewComponent;
import com.google.appinventor.components.runtime.ComponentContainer;

@DesignerComponent(version = 4,
        description = "Cowsay extension",
        category = ComponentCategory.EXTENSION,
        iconName = "images/extension.png",
        hasCustomMock = true)
@SimpleObject(external = true)
public class Cowsay extends AndroidViewComponent {

    private TextView tv;

    public Cowsay(ComponentContainer container) {
        super(container.$form());

        tv = new TextView(container.$context());

        Say("Moo");

        container.$add(this);
    }

    @Override
    public View getView() {
        return tv;
    }

    @DesignerProperty
    @SimpleProperty
    public void Say(String message) {
        tv.setText(CowsayLib.say(message));
    }
}
