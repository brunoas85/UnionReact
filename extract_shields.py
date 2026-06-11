#!/usr/bin/env python3
"""
Script para extraer escudos individuales de imágenes composición
"""
from PIL import Image
import os

def extract_shields():
    public_dir = "public"
    
    # Mapeo de Teams para cada imagen
    # fixSen.png: escudos de Zona A (7 equipos + Unión ya existe)
    # fixMax.png: escudos de Zona B (8 equipos)
    
    zona_a_teams = ["Frontera", "Las Rosas", "Arenal", "Sarmiento", "Vélez", "Comunicaciones", "Dinamo"]
    zona_b_teams = ["Embajadores", "Chapelco", "Lácar", "Patagonia", "El Barrio", "Old Boys", "Belgrano", "Dinosaurios"]
    
    # Procesar fixSen.png (Zona A)
    try:
        img_sen = Image.open(os.path.join(public_dir, "fixSen.png"))
        width, height = img_sen.size
        print(f"fixSen.png: {width}x{height}")
        
        # Asumir grid de escudos (típicamente 4x2 o similar)
        # Calcular tamaño de cada escudo
        shield_width = width // 4
        shield_height = height // 2
        
        # Extraer escudos
        idx = 0
        for row in range(2):
            for col in range(4):
                if idx < len(zona_a_teams):
                    left = col * shield_width
                    top = row * shield_height
                    right = left + shield_width
                    bottom = top + shield_height
                    
                    shield = img_sen.crop((left, top, right, bottom))
                    team_name = zona_a_teams[idx].lower().replace(" ", "")
                    output_path = os.path.join(public_dir, f"escudo-{team_name}.png")
                    shield.save(output_path)
                    print(f"✓ Guardado: escudo-{team_name}.png")
                    idx += 1
    except Exception as e:
        print(f"Error procesando fixSen.png: {e}")
    
    # Procesar fixMax.png (Zona B)
    try:
        img_max = Image.open(os.path.join(public_dir, "fixMax.png"))
        width, height = img_max.size
        print(f"\nfixMax.png: {width}x{height}")
        
        # Calcular tamaño de cada escudo
        shield_width = width // 4
        shield_height = height // 2
        
        # Extraer escudos
        idx = 0
        for row in range(2):
            for col in range(4):
                if idx < len(zona_b_teams):
                    left = col * shield_width
                    top = row * shield_height
                    right = left + shield_width
                    bottom = top + shield_height
                    
                    shield = img_max.crop((left, top, right, bottom))
                    team_name = zona_b_teams[idx].lower().replace(" ", "")
                    output_path = os.path.join(public_dir, f"escudo-{team_name}.png")
                    shield.save(output_path)
                    print(f"✓ Guardado: escudo-{team_name}.png")
                    idx += 1
    except Exception as e:
        print(f"Error procesando fixMax.png: {e}")

if __name__ == "__main__":
    extract_shields()
