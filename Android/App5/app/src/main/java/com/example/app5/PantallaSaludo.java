package com.example.app5;

import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;
import android.widget.TextView;

public class PantallaSaludo extends AppCompatActivity {
    private TextView saludo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pantalla_saludo);

        saludo = findViewById(R.id.editTextSaludo);

        // Recupero la info
        Bundle bunde = this.getIntent().getExtras();
        saludo.setText("Que la fuerza te acompañe, " + bunde.getString("saludoAPasar"));
    }
}