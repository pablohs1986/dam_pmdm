package com.example.app5;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private TextView campoNombre;
    private Button limpiar;
    private Button saludar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Referencias
        campoNombre.findViewById(R.id.tvIntroduceNombre);
        limpiar.findViewById(R.id.buttonLimpiar);
        saludar.findViewById(R.id.buttonSaludar);

        limpiar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                campoNombre.setText("");
            }
        });

        saludar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, PantallaSaludo.class);

                // Info a pasar
                Bundle b = new Bundle();
                b.putString("saludoAPasar", campoNombre.getText().toString());
                intent.putExtras(b);
                startActivity(intent);
            }
        });
    }
}