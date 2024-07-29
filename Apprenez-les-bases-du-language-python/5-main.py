# Enregistrez des données complexes avec des dictionnaires

fruits = {
    'pomme': 'rouge',
    'banane': 'jaune',
    'orange': 'orange'
}

print(fruits)

fruits['kiwi'] = 'vert'

print(fruits)

couleur_banane = fruits['banane']

print(couleur_banane)

fruits['pomme'] = 'vert'

print(fruits)

del fruits['orange']

print(fruits)
