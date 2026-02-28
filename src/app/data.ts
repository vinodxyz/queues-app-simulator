// Avatar imports
import imgLydia from "@/assets/lydia-avatar.png";
const imgCamilo = "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200";

/* ══════════════════════════════════════════════════════
   Gender-classified Avatar Pools (Unsplash, w=200)
   ══════════════════════════════════════════════════════ */

const MALE_AVATARS = [
  "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgwOTMyfDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1763598461615-610264129bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBzdWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgwOTM0fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1683480676844-75de72c206ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMG51cnNlJTIwc2NydWJzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgwOTM3fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1758691461884-ff702418afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBoZWFsdGhjYXJlJTIwd29ya2VyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxOTgwOTM4fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MDkzOXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTkwNjc1NXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1667281852305-4af0258748e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBtYW4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0MDB8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1589810689909-e88fc917771d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbiUyMGNvcnBvcmF0ZSUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQwMHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1741675121661-3ace9d68caba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBtYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQwMXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1706185651641-70fde5591275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBjb3Jwb3JhdGUlMjBzdWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgzNDAxfDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1765366574945-e2f1b4b1a5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiJTIwbWFuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0MDF8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1670233552608-c29e296c19eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwaHlzaWNpYW4lMjB3aGl0ZSUyMGNvYXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0MDJ8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1643898804248-1239ef388ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJlYXJkfGVufDF8fHx8MTc3MTk4MzQwMnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1571429682044-fbf7dfc72c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwYWZyaWNhbiUyMG1hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDAzfDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hbiUyMGNvcnBvcmF0ZSUyMHN1aXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0MDN8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1651795348528-10d575ca89ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwb2ZmaWNlfGVufDF8fHx8MTc3MTk4MzQwM3ww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1692266107806-7044c11dc5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwbWFuJTIwc3RhcnR1cCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQwNnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1713624107791-b4c9e590081c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXN0ZXJuJTIwZXVyb3BlYW4lMjBtYW4lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0MDd8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzb3IlMjBhY2FkZW1pYyUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgzNDA3fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1648025933224-b7d1f2e49e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsYWNrJTIwbWFuJTIwdGVjaCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQwOHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1736939561648-bafddedd9f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbWFuJTIwYnVzaW5lc3MlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0MDh8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1769628027250-d2a7a5a4eb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZGVkJTIwbWFuJTIwY29ycG9yYXRlJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDA5fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1651596082255-bcb4993cee27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwbWFuJTIwYnVzaW5lc3MlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQwOXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1565281011924-2ddb50a24b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlubyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgzNDA5fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1749635917012-20fb97d002f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBtYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQxMHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1628058589203-231a9b575c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBtYW4lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQxMHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1570274552732-05212a4f75ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0MTR8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1649829969229-0d40e96f8e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBtYW4lMjBjb3Jwb3JhdGUlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQxNXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0MTV8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1550051414-003c9007794c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMGhlcml0YWdlJTIwbWFuJTIwY29ycG9yYXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDE2fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1589668944320-409833e5ba10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmaW5hbmNpYWwlMjBhZHZpc29yJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0MTZ8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDE3fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1617746652974-0be48cd984d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQxN3ww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1764032759724-22608ed91af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWl3YW5lc2UlMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN0dWRpb3xlbnwxfHx8fDE3NzE5ODM0MTh8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1757454122597-bc1fda6ac0d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMG1hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0NDF8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1655923102863-c0b6cccc56f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYWlhbiUyMG1hbiUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDQxfDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1649768870222-17848797d6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWFuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0NDF8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1713636221406-09dde4aaf5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbWFuJTIwY29ycG9yYXRlJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5ODM0NDJ8MA&ixlib=rb-4.1.0&q=80&w=200",
];

const FEMALE_AVATARS = [
  "https://images.unsplash.com/photo-1589220286904-3dcef62c68ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc3MTk4MDkzMnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1758613654538-5f353b10f93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTg4MjU1NHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1569272059869-efe38db7e2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMHdvbWFuJTIwYmxvbmRlJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgwOTM0fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1765833468912-56ca0afa0c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MDkzNHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXN0JTIwYXNpYW4lMjB3b21hbiUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgwOTM0fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1704927768421-bc9549b5097d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgwOTM0fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvciUyMGhlYWx0aGNhcmUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODA5Mzh8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwaGVhbHRoY2FyZSUyMG51cnNlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgwOTM4fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGluZyUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MDkzOXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODM0MTU3fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1770627000564-3feb36aecbcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjB3b21hbiUyMGNvcnBvcmF0ZSUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQyNHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1707995673778-f7ded37a4c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWFuJTIwYnVzaW5lc3MlMjBsZWFkZXIlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQyNXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1764032760214-bbf340016105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDF8fHx8MTc3MTk4MzQyNXww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwd29tYW4lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQyNnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1698499352020-521e54040e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiJTIwd29tYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQyNnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDI3fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/flagged/photo-1579651465777-02b6c5d842ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwYWZyaWNhbiUyMHdvbWFuJTIwYnVzaW5lc3MlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQyN3ww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1686737357914-80a665ca1c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0Mjh8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1771340589665-cf724a153b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXN0ZXJuJTIwZXVyb3BlYW4lMjB3b21hbiUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDMzfDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1658767119017-3a2a362e65c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3NvciUyMHVuaXZlcnNpdHklMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQzM3ww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1769636930016-5d9f0ca653aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsYWNrJTIwd29tYW4lMjBjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQzM3ww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1765248149215-b0c913b904fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwd29tYW4lMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQzNHww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1642912274012-d410fc2bc18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgzNDM0fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1629145185593-5339038e644f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwd29tYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDM1fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1622930324190-64ed6525af13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlubyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0MzV8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1613483811981-56b07f3ec9e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDF8fHx8MTc3MTk4MzQzNnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1673378492516-96ee9af4cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjB3b21hbiUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTgzNDM2fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1633980990916-74317cba1ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxOTgzNDM2fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1762341104634-998bbee0ccba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwd29tYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk4MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1590669283757-27708beae1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHdvbWFuJTIwY29ycG9yYXRlJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5ODM0NDN8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMHJhY2UlMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4MzQ0M3ww&ixlib=rb-4.1.0&q=80&w=200",
];

/** Names classified as female — everything else defaults to male */
const FEMALE_NAMES = new Set([
  "Priya Sharma", "Keiko Tanaka", "Kristin Patterson", "Cassandra Dunn",
  "Danielle Booker", "Kayo Miwa", "Reta Taylor", "Sonia Stein",
  "Anita Flores", "Fatima Al-Hassan", "Nina Petrova", "Tomoko Sato",
  "Ava Bennett", "Bianca Torres", "Dina Osman", "Elara Kovacs",
  "Freya Lindstrom", "Giselle Fontaine", "Hana Yoshida", "Ingrid Solberg",
  "Jada Collins", "Kaia Christensen", "Luna Marquez", "Mei-Lin Wu",
  "Noor Al-Rashidi", "Olivia Hartwell", "Penelope Vasquez", "Rashida Okonkwo",
  "Sakura Ito", "Talia Avraham", "Uma Chatterjee", "Vera Sokolova",
  "Wren Calloway", "Xia Chen", "Yara Mostafa", "Zuri Kamau",
  "Aaliya Syed", "Brynn Callahan", "Carmen Espinoza", "Diana Romanescu",
  "Fiona McBride", "Grace Hwang", "Harper Sullivan", "Iris Papadimitriou",
  "Jade Thompson", "Kaya Ozdemir", "Leah Bernstein", "Maya Chakraborty",
  "Nadira Bencherif", "Orla Fitzgerald", "Paloma Cruz", "Rina Watanabe",
  "Simone Leclerc", "Tess Hawkins", "Umi Taniguchi", "Valeria Moreno",
  "Yasmin Tehrani", "Zara Oyelaran", "Abigail Stewart", "Kendra Mosley",
  "Lena Johansson", "Nadia Petrov", "Rosa Gutierrez", "Celine Dupont",
  "Lucia Fernandez", "Petra Novotny", "Akiko Mori", "Imani Osei",
  // Additional female agents
  "Amara Diallo", "Mei Takahashi", "Dahlia Nazari", "Sienna Walsh",
  "Chiara Romano", "Esme Beaumont", "Nyla Richardson", "Kavya Nair",
  "Lara Hoffmann", "Thalia Stavros", "Rhea Mathews", "Priscilla Duarte",
  "Alina Sokolov", "Maren Bjornstad", "Zoya Ivanova",
  // Supervisors classified as female
  "Morgan Ellis", "Casey Rivera", "Riley Nakamura", "Avery Desmond",
  "Sage Petrov", "Reese Lindqvist", "Tamara Owens", "Elena Vargas",
  "Astrid Johansson", "Meera Kapoor", "Yuna Park",
]);

/** Deterministic hash from name → pool index (spreads evenly) */
function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = ((h << 5) - h + name.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pickAvatar(name: string): string {
  const isFemale = FEMALE_NAMES.has(name);
  const pool = isFemale ? FEMALE_AVATARS : MALE_AVATARS;
  return pool[hashName(name) % pool.length];
}

/* ══════════════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════════════ */

export type PresenceStatus = "available" | "busy" | "away" | "offline" | "unknown";

export interface Person {
  id: string;
  name: string;
  avatar: string;
  role: "lead" | "agent";
  optedIn: boolean;
  status: PresenceStatus;
  activity?: string;
}

export interface Queue {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  avatarTextColor: string;
  optedInCount: number;
  hasAlert?: boolean;
  people: Person[];
  callsWaiting: number;
  longestWait: string;
  avgAnswerTime: string;
  serviceLevel: number;
  callsPresented: number;
  callsAnswered: number;
  abandonRate: number;
}

/* ══════════════════════════════════════════════════════
   Main Users
   ══════════════════════════════════════════════════════ */

export const currentUser: Person = {
  id: "user-0",
  name: "Lydia Bauer",
  avatar: imgLydia,
  role: "lead",
  optedIn: false,
  status: "available",
};

export const agentUser: Person = {
  id: "agent-user-0",
  name: "Camilo Moreno",
  avatar: imgCamilo,
  role: "agent",
  optedIn: false,
  status: "available",
};

/** Profile avatar for supervisor header */
export const supervisorProfileAvatar = imgLydia;
/** Profile avatar for agent header */
export const agentProfileAvatar = imgCamilo;

// Legacy exports for backward compatibility
export const userProfileAvatar = imgLydia;
export const userProfileAvatarOverlay = imgLydia;

/* ══════════════════════════════════════════════════════
   Queue Color Palette (Teams-style)
   ══════════════════════════════════════════════════════ */

const QUEUE_COLORS: Array<{ bg: string; text: string }> = [
  { bg: "#DAFBE1", text: "#107C10" }, // Forest green
  { bg: "#E8EBFA", text: "#5B5FC7" }, // Indigo (Teams brand)
  { bg: "#D2F0EE", text: "#038387" }, // Teal
  { bg: "#FDE7E9", text: "#C4314B" }, // Red/berry
  { bg: "#EDE1F5", text: "#7719AA" }, // Grape
  { bg: "#DEECF9", text: "#0078D4" }, // Blue
  { bg: "#E6F2D9", text: "#498205" }, // Light green
  { bg: "#D6F4F4", text: "#00B7C3" }, // Cyan
  { bg: "#FFF4CE", text: "#C19C00" }, // Gold
  { bg: "#FCE1E4", text: "#E3008C" }, // Hot pink
  { bg: "#FFF0E0", text: "#CA5010" }, // Orange
  { bg: "#ECE3F0", text: "#5C2E91" }, // Orchid
  { bg: "#E0E8F0", text: "#455A64" }, // Steel
  { bg: "#DCF5DC", text: "#0B6A0B" }, // Dark green
  { bg: "#F0E6FA", text: "#8764B8" }, // Lavender
];

/* ══════════════════════════════════════════════════════
   People Pool (~120 diverse names)
   ══════════════════════════════════════════════════════ */

const AGENT_NAMES = [
  // Existing (updated)
  "Marcus Chen", "Priya Sharma", "Keiko Tanaka", "Kristin Patterson",
  "Bruno Zhao", "Carlos Slattery", "Cassandra Dunn", "Chris Naidoo",
  "Danielle Booker", "Henry Brill", "Isaac Fielder", "Kayo Miwa",
  "Kian Lambert", "Mauricio August", "Reta Taylor", "Sonia Stein",
  "Anita Flores", "Derek Lam", "Fatima Al-Hassan", "Glen Ramos",
  "Nina Petrova", "Tomoko Sato", "Raj Patel",
  // New agents (~100 more)
  "Amir Hassan", "Jamal Brooks", "Nikolai Petrov", "Santiago Rivera",
  "Wei Zhang", "Kofi Asante", "Ravi Mehta", "Dmitri Volkov",
  "Mateo Gutierrez", "Oluwaseun Adebayo", "Vikram Singh", "Yuto Nakamura",
  "Andre Williams", "Benson Okafor", "Davi Santos", "Esteban Reyes",
  "Farid Mansouri", "Gabriel Dumont", "Hugo Lindgren", "Ibrahim Khalil",
  "Jackson Moore", "Leonardo Russo", "Miguel Torres", "Naveen Kumar",
  "Oscar Delgado", "Pavel Novak", "Quentin Park", "Stefan Mueller",
  "Tomas Bergman", "Umar Farooq", "Winston Chang", "Xavier Mendez",
  "Yosef Abrams", "Zane Mitchell", "Aaron Blackwell", "Brendan O'Neill",
  "Dante Rossi", "Elias Johansen", "Finn McAllister", "Girish Reddy",
  "Owen Prescott", "Rohan Kapoor", "Sam Thornton", "Tyler Griffin",
  "Vince Castellano", "Warren Douglas", "Xander Cole", "Zachary Foster",
  "Ava Bennett", "Bianca Torres", "Dina Osman", "Elara Kovacs",
  "Freya Lindstrom", "Giselle Fontaine", "Hana Yoshida", "Ingrid Solberg",
  "Jada Collins", "Kaia Christensen", "Luna Marquez", "Mei-Lin Wu",
  "Noor Al-Rashidi", "Olivia Hartwell", "Penelope Vasquez", "Rashida Okonkwo",
  "Sakura Ito", "Talia Avraham", "Uma Chatterjee", "Vera Sokolova",
  "Wren Calloway", "Xia Chen", "Yara Mostafa", "Zuri Kamau",
  "Aaliya Syed", "Brynn Callahan", "Carmen Espinoza", "Diana Romanescu",
  "Fiona McBride", "Grace Hwang", "Harper Sullivan", "Iris Papadimitriou",
  "Jade Thompson", "Kaya Ozdemir", "Leah Bernstein", "Maya Chakraborty",
  "Nadira Bencherif", "Orla Fitzgerald", "Paloma Cruz", "Rina Watanabe",
  "Simone Leclerc", "Tess Hawkins", "Umi Taniguchi", "Valeria Moreno",
  "Yasmin Tehrani", "Zara Oyelaran", "Abigail Stewart", "Kendra Mosley",
  "Lena Johansson", "Malik Robinson", "Nadia Petrov", "Omar Essam",
  "Rosa Gutierrez", "Tariq Bashir", "Celine Dupont", "Hideo Yamamoto",
  "Kwesi Mensah", "Lucia Fernandez", "Petra Novotny", "Sanjay Gupta",
  "Akiko Mori", "Declan Murray", "Imani Osei", "Tobias Keller",
  // Additional agents for larger high-volume queues (~30 more)
  "Roland Fischer", "Nate Holloway", "Idris Ogunleye", "Joon-Ho Choi",
  "Marco Pellegrini", "Andrei Popescu", "Soren Andersen", "Hamza Yilmaz",
  "Kelvin Oduya", "Cyrus Tehrani", "Bennett Hayes", "Luca Martinelli",
  "Emir Hadzic", "Callum Fraser", "Josiah Banks",
  "Amara Diallo", "Mei Takahashi", "Dahlia Nazari", "Sienna Walsh",
  "Chiara Romano", "Esme Beaumont", "Nyla Richardson", "Kavya Nair",
  "Lara Hoffmann", "Thalia Stavros", "Rhea Mathews", "Priscilla Duarte",
  "Alina Sokolov", "Maren Bjornstad", "Zoya Ivanova",
];

const STATUSES: PresenceStatus[] = ["available", "busy", "away", "offline"];
const ACTIVITIES = [undefined, "In a call", undefined, undefined];

function makeAgent(index: number, optedIn: boolean): Person {
  const name = AGENT_NAMES[index % AGENT_NAMES.length];
  const statusIdx = (index * 7 + 3) % STATUSES.length;
  return {
    id: `p${index + 1}`,
    name,
    avatar: pickAvatar(name),
    role: "agent",
    optedIn,
    status: STATUSES[statusIdx],
    activity: STATUSES[statusIdx] === "busy" ? "In a call" : undefined,
  };
}

/* ══════════════════════════════════════════════════════
   Queue Definitions (15 healthcare queues)
   ══════════════════════════════════════════════════════ */

interface QueueDef {
  id: string;
  name: string;
  initials: string;
  colorIdx: number;
  callsWaiting: number;
  longestWait: string;
  avgAnswerTime: string;
  serviceLevel: number;
  callsPresented: number;
  callsAnswered: number;
  hasAlert?: boolean;
  agentRange: [number, number]; // indices into AGENT_NAMES
  optInPercent: number; // percentage of agents opted in (0-100)
  /** Call volume weight — higher = busier queue (1.0 = average). Used by simulator for arrival rates. */
  callWeight: number;
}

const QUEUE_DEFS: QueueDef[] = [
  // ── Supervisor queues (q1–q15) — agent counts & callWeight reflect real-world volume ──
  { id: "q1", name: "ICU North Wing - hotline", initials: "IN", colorIdx: 0, callsWaiting: 3, longestWait: "1:45", avgAnswerTime: "1:12", serviceLevel: 82, callsPresented: 14, callsAnswered: 11, agentRange: [30, 44], optInPercent: 57, callWeight: 1.8 },
  { id: "q2", name: "Primary care - nurse line", initials: "PC", colorIdx: 1, callsWaiting: 6, longestWait: "3:16", avgAnswerTime: "2:02", serviceLevel: 68, callsPresented: 22, callsAnswered: 15, agentRange: [5, 23], optInPercent: 22, callWeight: 2.5 },
  { id: "q3", name: "Trauma unit - senior nurse queue", initials: "TU", colorIdx: 2, callsWaiting: 3, longestWait: "2:30", avgAnswerTime: "1:45", serviceLevel: 88, callsPresented: 20, callsAnswered: 18, agentRange: [38, 50], optInPercent: 70, callWeight: 1.5 },
  { id: "q4", name: "Emergency department (nurse triaging desk)", initials: "ED", colorIdx: 3, callsWaiting: 10, longestWait: "5:02", avgAnswerTime: "3:15", serviceLevel: 55, callsPresented: 35, callsAnswered: 20, agentRange: [0, 20], optInPercent: 33, callWeight: 3.0 },
  { id: "q5", name: "Discharge planning", initials: "DP", colorIdx: 4, callsWaiting: 5, longestWait: "4:20", avgAnswerTime: "2:50", serviceLevel: 62, callsPresented: 16, callsAnswered: 10, agentRange: [68, 75], optInPercent: 20, callWeight: 0.8 },
  { id: "q6", name: "Surgical ICU post-op coordination", initials: "SI", colorIdx: 5, callsWaiting: 1, longestWait: "0:45", avgAnswerTime: "0:58", serviceLevel: 93, callsPresented: 8, callsAnswered: 8, agentRange: [63, 71], optInPercent: 80, callWeight: 1.0 },
  { id: "q7", name: "General medicine - floor 5 station", initials: "GM", colorIdx: 6, callsWaiting: 4, longestWait: "2:10", avgAnswerTime: "1:30", serviceLevel: 78, callsPresented: 14, callsAnswered: 11, agentRange: [45, 56], optInPercent: 50, callWeight: 1.5 },
  { id: "q8", name: "Palliative care support line", initials: "PC", colorIdx: 7, callsWaiting: 0, longestWait: "0:00", avgAnswerTime: "1:05", serviceLevel: 97, callsPresented: 6, callsAnswered: 6, agentRange: [80, 84], optInPercent: 90, callWeight: 0.4 },
  { id: "q9", name: "Oncology consultation line", initials: "OC", colorIdx: 8, callsWaiting: 2, longestWait: "2:55", avgAnswerTime: "2:20", serviceLevel: 76, callsPresented: 10, callsAnswered: 8, agentRange: [72, 78], optInPercent: 42, callWeight: 0.7 },
  { id: "q10", name: "Pediatric urgent care triage", initials: "PU", colorIdx: 9, callsWaiting: 7, longestWait: "4:10", avgAnswerTime: "2:45", serviceLevel: 62, callsPresented: 28, callsAnswered: 18, agentRange: [20, 36], optInPercent: 25, callWeight: 2.2 },
  { id: "q11", name: "Radiology results callback", initials: "RR", colorIdx: 10, callsWaiting: 0, longestWait: "0:18", avgAnswerTime: "0:30", serviceLevel: 95, callsPresented: 5, callsAnswered: 5, agentRange: [82, 85], optInPercent: 73, callWeight: 0.3 },
  { id: "q12", name: "Post-surgical follow-up", initials: "PS", colorIdx: 11, callsWaiting: 1, longestWait: "1:00", avgAnswerTime: "1:05", serviceLevel: 90, callsPresented: 8, callsAnswered: 7, agentRange: [76, 81], optInPercent: 58, callWeight: 0.6 },
  { id: "q13", name: "Mental health crisis line", initials: "MH", colorIdx: 12, callsWaiting: 4, longestWait: "3:40", avgAnswerTime: "2:50", serviceLevel: 72, callsPresented: 18, callsAnswered: 14, agentRange: [52, 62], optInPercent: 33, callWeight: 1.3 },
  { id: "q14", name: "Labor & delivery triage", initials: "LD", colorIdx: 13, callsWaiting: 8, longestWait: "6:15", avgAnswerTime: "3:30", serviceLevel: 52, callsPresented: 32, callsAnswered: 18, agentRange: [10, 28], optInPercent: 23, callWeight: 2.5 },
  { id: "q15", name: "Pharmacy benefits helpline", initials: "PB", colorIdx: 14, callsWaiting: 2, longestWait: "1:10", avgAnswerTime: "0:55", serviceLevel: 89, callsPresented: 12, callsAnswered: 11, agentRange: [58, 67], optInPercent: 69, callWeight: 1.2 },
  // ── Agent-only queues (aq1–aq5) ──
  { id: "aq1", name: "Outpatient scheduling desk", initials: "OS", colorIdx: 9, callsWaiting: 3, longestWait: "1:55", avgAnswerTime: "1:22", serviceLevel: 82, callsPresented: 14, callsAnswered: 12, agentRange: [95, 103], optInPercent: 55, callWeight: 1.0 },
  { id: "aq2", name: "Patient transport coordination", initials: "PT", colorIdx: 3, callsWaiting: 0, longestWait: "0:20", avgAnswerTime: "0:28", serviceLevel: 94, callsPresented: 6, callsAnswered: 6, agentRange: [108, 112], optInPercent: 75, callWeight: 0.5 },
  { id: "aq3", name: "Cardiology nurse on-call", initials: "CN", colorIdx: 5, callsWaiting: 3, longestWait: "2:40", avgAnswerTime: "1:48", serviceLevel: 70, callsPresented: 12, callsAnswered: 9, agentRange: [100, 107], optInPercent: 38, callWeight: 0.8 },
  { id: "aq4", name: "Insurance verification line", initials: "IV", colorIdx: 8, callsWaiting: 7, longestWait: "5:20", avgAnswerTime: "3:10", serviceLevel: 50, callsPresented: 24, callsAnswered: 15, agentRange: [85, 97], optInPercent: 20, callWeight: 1.5 },
  { id: "aq5", name: "Rehab & physical therapy intake", initials: "RP", colorIdx: 2, callsWaiting: 1, longestWait: "0:50", avgAnswerTime: "0:42", serviceLevel: 90, callsPresented: 9, callsAnswered: 8, agentRange: [105, 110], optInPercent: 67, callWeight: 0.6 },
];

/** Queue IDs visible to the supervisor (Lydia Bauer) */
export const SUPERVISOR_QUEUE_IDS = [
  "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8",
  "q9", "q10", "q11", "q12", "q13", "q14", "q15",
];

/** Queue IDs visible to the agent (Camilo Moreno) — different set, shuffled order */
export const AGENT_QUEUE_IDS = [
  "aq1", "aq2", "aq3", "aq4", "aq5",
  "q7", "q4", "q14", "q2", "q13",
  "q8", "q11", "q6", "q10", "q3",
];

function buildQueues(): Queue[] {
  return QUEUE_DEFS.map((def) => {
    const color = QUEUE_COLORS[def.colorIdx % QUEUE_COLORS.length];
    const agents: Person[] = [];
    for (let i = def.agentRange[0]; i < def.agentRange[1]; i++) {
      // Hash-based opt-in for natural variance per queue
      const nameHash = hashName(AGENT_NAMES[i % AGENT_NAMES.length]);
      const queueSeed = def.colorIdx * 17 + i * 7;
      const optedIn = ((nameHash + queueSeed) % 100) < def.optInPercent;
      agents.push(makeAgent(i, optedIn));
    }
    const optedInCount = agents.filter((a) => a.optedIn).length;
    const abandonRate = def.callsPresented > 0
      ? Math.round(((def.callsPresented - def.callsAnswered) / def.callsPresented) * 100)
      : 0;
    return {
      id: def.id,
      name: def.name,
      initials: def.initials,
      avatarBg: color.bg,
      avatarTextColor: color.text,
      optedInCount,
      hasAlert: def.hasAlert || optedInCount === 0,
      people: [{ ...currentUser, optedIn: false }, ...agents],
      callsWaiting: def.callsWaiting,
      longestWait: def.longestWait,
      avgAnswerTime: def.avgAnswerTime,
      serviceLevel: def.serviceLevel,
      callsPresented: def.callsPresented,
      callsAnswered: def.callsAnswered,
      abandonRate,
    };
  });
}

export const queues: Queue[] = buildQueues();

/** Call volume weights by queue ID — used by simulator for arrival rate scaling */
export const QUEUE_CALL_WEIGHTS: Record<string, number> = Object.fromEntries(
  QUEUE_DEFS.map((def) => [def.id, def.callWeight])
);

/* ══════════════════════════════════════════════════════
   Supervisors (20 named personas)
   ══════════════════════════════════════════════════════ */

export interface Supervisor {
  id: string;
  name: string;
  initials: string;
  avatar: string;
  queueIds: string[];
}

export const otherSupervisors: Supervisor[] = [
  { id: "sup-1", name: "Morgan Ellis", initials: "ME", avatar: pickAvatar("Morgan Ellis"), queueIds: ["q1", "q2", "q3", "q9"] },
  { id: "sup-2", name: "Jordan Kim", initials: "JK", avatar: pickAvatar("Jordan Kim"), queueIds: ["q2", "q4", "q7", "q10"] },
  { id: "sup-3", name: "Casey Rivera", initials: "CR", avatar: pickAvatar("Casey Rivera"), queueIds: ["q1", "q5", "q6", "q11"] },
  { id: "sup-4", name: "Taylor Okonkwo", initials: "TO", avatar: pickAvatar("Taylor Okonkwo"), queueIds: ["q3", "q4", "q8", "q12"] },
  { id: "sup-5", name: "Riley Nakamura", initials: "RN", avatar: pickAvatar("Riley Nakamura"), queueIds: ["q2", "q6", "q7", "q13"] },
  { id: "sup-6", name: "Avery Desmond", initials: "AD", avatar: pickAvatar("Avery Desmond"), queueIds: ["q1", "q4", "q5", "q14"] },
  { id: "sup-7", name: "Quinn Alvarez", initials: "QA", avatar: pickAvatar("Quinn Alvarez"), queueIds: ["q3", "q7", "q8", "q15"] },
  { id: "sup-8", name: "Sage Petrov", initials: "SP", avatar: pickAvatar("Sage Petrov"), queueIds: ["q2", "q5", "q6", "q9"] },
  { id: "sup-9", name: "Drew Morales", initials: "DM", avatar: pickAvatar("Drew Morales"), queueIds: ["q4", "q6", "q8", "q10"] },
  { id: "sup-10", name: "Reese Lindqvist", initials: "RL", avatar: pickAvatar("Reese Lindqvist"), queueIds: ["q1", "q3", "q7", "q11"] },
  { id: "sup-11", name: "Tamara Owens", initials: "TO", avatar: pickAvatar("Tamara Owens"), queueIds: ["q1", "q4", "q6", "q12"] },
  { id: "sup-12", name: "Vincent Chao", initials: "VC", avatar: pickAvatar("Vincent Chao"), queueIds: ["q2", "q5", "q8", "q13"] },
  { id: "sup-13", name: "Hiro Watanabe", initials: "HW", avatar: pickAvatar("Hiro Watanabe"), queueIds: ["q3", "q4", "q7", "q14"] },
  { id: "sup-14", name: "Elena Vargas", initials: "EV", avatar: pickAvatar("Elena Vargas"), queueIds: ["q1", "q5", "q8", "q15"] },
  { id: "sup-15", name: "Darnell Wright", initials: "DW", avatar: pickAvatar("Darnell Wright"), queueIds: ["q2", "q6", "q7", "q9"] },
  { id: "sup-16", name: "Astrid Johansson", initials: "AJ", avatar: pickAvatar("Astrid Johansson"), queueIds: ["q3", "q5", "q8", "q10"] },
  { id: "sup-17", name: "Meera Kapoor", initials: "MK", avatar: pickAvatar("Meera Kapoor"), queueIds: ["q1", "q2", "q4", "q11"] },
  { id: "sup-18", name: "Faris Al-Rashid", initials: "FA", avatar: pickAvatar("Faris Al-Rashid"), queueIds: ["q3", "q6", "q7", "q12"] },
  { id: "sup-19", name: "Yuna Park", initials: "YP", avatar: pickAvatar("Yuna Park"), queueIds: ["q2", "q4", "q8", "q13"] },
  { id: "sup-20", name: "Marco Fuentes", initials: "MF", avatar: pickAvatar("Marco Fuentes"), queueIds: ["q1", "q5", "q6", "q14"] },
];

/* ══════════════════════════════════════════════════════
   Call History
   ══════════════════════════════════════════════════════ */

export type CallType = "missed" | "answered" | "outgoing" | "forwarded";

export interface CallRecord {
  id: string;
  callerName: string;
  subtitle: string;
  time: string;
  type: CallType;
  hasVideo?: boolean;
  hasTranscript?: boolean;
}

export const callHistories: Record<string, CallRecord[]> = {
  // q1 — ICU North Wing hotline: high-urgency, mostly answered, fast turnaround
  q1: [
    { id: "c1-01", callerName: "+1 (415) 555-0147", subtitle: "2 min 30 sec", time: "11:42 AM", type: "answered" },
    { id: "c1-02", callerName: "+1 (212) 555-0198", subtitle: "1 min 55 sec", time: "11:28 AM", type: "answered", hasTranscript: true },
    { id: "c1-03", callerName: "+1 (650) 555-0331", subtitle: "Missed call", time: "11:14 AM", type: "missed" },
    { id: "c1-04", callerName: "+1 (510) 555-0462", subtitle: "3 min 8 sec", time: "10:58 AM", type: "answered" },
    { id: "c1-05", callerName: "+1 (408) 555-0519", subtitle: "4 min 22 sec", time: "10:41 AM", type: "answered", hasTranscript: true },
    { id: "c1-06", callerName: "+1 (312) 555-0287", subtitle: "1 min 10 sec", time: "10:23 AM", type: "answered" },
    { id: "c1-07", callerName: "+1 (617) 555-0193", subtitle: "Missed call", time: "10:05 AM", type: "missed" },
    { id: "c1-08", callerName: "+1 (773) 555-0844", subtitle: "2 min 47 sec", time: "9:48 AM", type: "answered" },
    { id: "c1-09", callerName: "Marcus Chen", subtitle: "5 min 12 sec", time: "9:30 AM", type: "outgoing" },
    { id: "c1-10", callerName: "+1 (202) 555-0376", subtitle: "1 min 34 sec", time: "9:12 AM", type: "answered" },
    { id: "c1-11", callerName: "+1 (415) 555-0147", subtitle: "3 min 5 sec", time: "8:55 AM", type: "answered" },
    { id: "c1-12", callerName: "+1 (718) 555-0621", subtitle: "0 min 48 sec", time: "8:33 AM", type: "answered" },
  ],

  // q2 — Primary care nurse line: busy, repeat callers, some forwarded
  q2: [
    { id: "c2-01", callerName: "+1 (263) 952-6921", subtitle: "Missed call", time: "11:29 AM", type: "missed" },
    { id: "c2-02", callerName: "+1 (617) 934-2085", subtitle: "1 min 2 sec", time: "11:16 AM", type: "answered" },
    { id: "c2-03", callerName: "+1 (263) 952-6921", subtitle: "Forwarded by Priya", time: "11:02 AM", type: "forwarded" },
    { id: "c2-04", callerName: "+1 (617) 934-2085", subtitle: "4 min 51 sec", time: "10:48 AM", type: "answered" },
    { id: "c2-05", callerName: "+1 (510) 555-0733", subtitle: "2 min 18 sec", time: "10:31 AM", type: "answered" },
    { id: "c2-06", callerName: "+1 (415) 555-0882", subtitle: "Missed call", time: "10:15 AM", type: "missed" },
    { id: "c2-07", callerName: "+1 (650) 555-0294", subtitle: "3 min 44 sec", time: "9:58 AM", type: "answered", hasTranscript: true },
    { id: "c2-08", callerName: "+1 (408) 555-0671", subtitle: "1 min 33 sec", time: "9:40 AM", type: "answered" },
    { id: "c2-09", callerName: "Lydia Bauer", subtitle: "3 min 12 sec", time: "9:22 AM", type: "outgoing", hasVideo: true, hasTranscript: true },
    { id: "c2-10", callerName: "+1 (263) 952-6921", subtitle: "Transferred by Andre", time: "9:04 AM", type: "forwarded" },
    { id: "c2-11", callerName: "+1 (617) 934-2085", subtitle: "1 min 14 sec", time: "8:47 AM", type: "answered" },
    { id: "c2-12", callerName: "+1 (312) 555-0155", subtitle: "2 min 6 sec", time: "8:30 AM", type: "answered" },
    { id: "c2-13", callerName: "+1 (773) 555-0428", subtitle: "Missed call", time: "8:12 AM", type: "missed" },
    { id: "c2-14", callerName: "+1 (202) 555-0917", subtitle: "5 min 22 sec", time: "7:55 AM", type: "answered" },
  ],

  // q3 — Trauma unit senior nurse queue: well-managed, high answer rate
  q3: [
    { id: "c3-01", callerName: "+1 (312) 555-0234", subtitle: "1 min 45 sec", time: "11:32 AM", type: "answered" },
    { id: "c3-02", callerName: "+1 (617) 555-0189", subtitle: "3 min 10 sec", time: "11:15 AM", type: "answered", hasTranscript: true },
    { id: "c3-03", callerName: "+1 (773) 555-0512", subtitle: "2 min 28 sec", time: "10:57 AM", type: "answered" },
    { id: "c3-04", callerName: "+1 (212) 555-0746", subtitle: "Missed call", time: "10:40 AM", type: "missed" },
    { id: "c3-05", callerName: "+1 (503) 555-0156", subtitle: "Forwarded by Derek", time: "10:22 AM", type: "forwarded" },
    { id: "c3-06", callerName: "+1 (415) 555-0893", subtitle: "4 min 15 sec", time: "10:05 AM", type: "answered" },
    { id: "c3-07", callerName: "+1 (650) 555-0371", subtitle: "1 min 52 sec", time: "9:48 AM", type: "answered" },
    { id: "c3-08", callerName: "+1 (510) 555-0629", subtitle: "2 min 34 sec", time: "9:30 AM", type: "answered" },
    { id: "c3-09", callerName: "Anita Flores", subtitle: "3 min 29 sec", time: "9:13 AM", type: "outgoing", hasVideo: true },
    { id: "c3-10", callerName: "+1 (408) 555-0284", subtitle: "1 min 18 sec", time: "8:55 AM", type: "answered" },
    { id: "c3-11", callerName: "+1 (718) 555-0943", subtitle: "5 min 2 sec", time: "8:38 AM", type: "answered", hasTranscript: true },
  ],

  // q4 — Emergency department: very busy, more missed calls than average
  q4: [
    { id: "c4-01", callerName: "+1 (718) 555-0321", subtitle: "Missed call", time: "11:48 AM", type: "missed" },
    { id: "c4-02", callerName: "+1 (718) 555-0321", subtitle: "Missed call", time: "11:45 AM", type: "missed" },
    { id: "c4-03", callerName: "+1 (415) 555-0267", subtitle: "6 min 3 sec", time: "11:30 AM", type: "answered", hasTranscript: true },
    { id: "c4-04", callerName: "+1 (212) 555-0814", subtitle: "2 min 17 sec", time: "11:13 AM", type: "answered" },
    { id: "c4-05", callerName: "+1 (646) 555-0392", subtitle: "Missed call", time: "10:56 AM", type: "missed" },
    { id: "c4-06", callerName: "+1 (510) 555-0748", subtitle: "1 min 44 sec", time: "10:39 AM", type: "answered" },
    { id: "c4-07", callerName: "+1 (773) 555-0163", subtitle: "4 min 38 sec", time: "10:22 AM", type: "answered" },
    { id: "c4-08", callerName: "+1 (617) 555-0529", subtitle: "Missed call", time: "10:05 AM", type: "missed" },
    { id: "c4-09", callerName: "+1 (408) 555-0871", subtitle: "3 min 11 sec", time: "9:48 AM", type: "answered" },
    { id: "c4-10", callerName: "+1 (312) 555-0446", subtitle: "1 min 55 sec", time: "9:31 AM", type: "answered" },
    { id: "c4-11", callerName: "+1 (650) 555-0583", subtitle: "Missed call", time: "9:14 AM", type: "missed" },
    { id: "c4-12", callerName: "+1 (202) 555-0729", subtitle: "2 min 40 sec", time: "8:57 AM", type: "answered" },
    { id: "c4-13", callerName: "+1 (718) 555-0321", subtitle: "Forwarded by Glen", time: "8:40 AM", type: "forwarded" },
    { id: "c4-14", callerName: "+1 (914) 555-0215", subtitle: "5 min 9 sec", time: "8:23 AM", type: "answered" },
    { id: "c4-15", callerName: "+1 (516) 555-0637", subtitle: "Missed call", time: "8:05 AM", type: "missed" },
  ],

  // q5 — Discharge planning: understaffed (alert queue), lots of missed
  q5: [
    { id: "c5-01", callerName: "+1 (650) 555-0198", subtitle: "Missed call", time: "11:40 AM", type: "missed" },
    { id: "c5-02", callerName: "+1 (650) 555-0198", subtitle: "Missed call", time: "11:22 AM", type: "missed" },
    { id: "c5-03", callerName: "+1 (408) 555-0345", subtitle: "3 min 14 sec", time: "11:05 AM", type: "answered" },
    { id: "c5-04", callerName: "+1 (510) 555-0892", subtitle: "Missed call", time: "10:48 AM", type: "missed" },
    { id: "c5-05", callerName: "+1 (415) 555-0716", subtitle: "1 min 50 sec", time: "10:30 AM", type: "answered" },
    { id: "c5-06", callerName: "+1 (312) 555-0563", subtitle: "Missed call", time: "10:13 AM", type: "missed" },
    { id: "c5-07", callerName: "+1 (617) 555-0241", subtitle: "4 min 27 sec", time: "9:55 AM", type: "answered" },
    { id: "c5-08", callerName: "+1 (650) 555-0198", subtitle: "Missed call", time: "9:38 AM", type: "missed" },
    { id: "c5-09", callerName: "+1 (773) 555-0439", subtitle: "2 min 5 sec", time: "9:20 AM", type: "answered" },
    { id: "c5-10", callerName: "+1 (202) 555-0854", subtitle: "Missed call", time: "9:03 AM", type: "missed" },
    { id: "c5-11", callerName: "+1 (718) 555-0127", subtitle: "1 min 32 sec", time: "8:45 AM", type: "answered" },
  ],

  // q6 — Surgical ICU post-op coordination: well-staffed, mostly answered
  q6: [
    { id: "c6-01", callerName: "+1 (510) 555-0145", subtitle: "2 min 22 sec", time: "11:35 AM", type: "answered" },
    { id: "c6-02", callerName: "+1 (415) 555-0773", subtitle: "3 min 48 sec", time: "11:18 AM", type: "answered", hasTranscript: true },
    { id: "c6-03", callerName: "+1 (650) 555-0491", subtitle: "1 min 15 sec", time: "11:00 AM", type: "answered" },
    { id: "c6-04", callerName: "+1 (408) 555-0362", subtitle: "4 min 10 sec", time: "10:43 AM", type: "answered" },
    { id: "c6-05", callerName: "+1 (312) 555-0828", subtitle: "Missed call", time: "10:25 AM", type: "missed" },
    { id: "c6-06", callerName: "+1 (617) 555-0516", subtitle: "2 min 55 sec", time: "10:08 AM", type: "answered" },
    { id: "c6-07", callerName: "Nina Petrova", subtitle: "1 min 40 sec", time: "9:50 AM", type: "answered" },
    { id: "c6-08", callerName: "+1 (773) 555-0694", subtitle: "5 min 30 sec", time: "9:33 AM", type: "answered", hasTranscript: true },
    { id: "c6-09", callerName: "+1 (202) 555-0257", subtitle: "1 min 58 sec", time: "9:15 AM", type: "answered" },
    { id: "c6-10", callerName: "+1 (510) 555-0145", subtitle: "3 min 12 sec", time: "8:58 AM", type: "answered" },
  ],

  // q7 — General medicine floor 5: moderate volume, typical mix
  q7: [
    { id: "c7-01", callerName: "+1 (408) 555-0176", subtitle: "Missed call", time: "11:40 AM", type: "missed" },
    { id: "c7-02", callerName: "+1 (312) 555-0593", subtitle: "2 min 14 sec", time: "11:22 AM", type: "answered" },
    { id: "c7-03", callerName: "+1 (617) 555-0841", subtitle: "1 min 38 sec", time: "11:05 AM", type: "answered" },
    { id: "c7-04", callerName: "+1 (415) 555-0427", subtitle: "3 min 52 sec", time: "10:47 AM", type: "answered", hasTranscript: true },
    { id: "c7-05", callerName: "+1 (650) 555-0318", subtitle: "Missed call", time: "10:30 AM", type: "missed" },
    { id: "c7-06", callerName: "+1 (773) 555-0256", subtitle: "4 min 5 sec", time: "10:12 AM", type: "answered" },
    { id: "c7-07", callerName: "+1 (510) 555-0789", subtitle: "1 min 22 sec", time: "9:55 AM", type: "answered" },
    { id: "c7-08", callerName: "+1 (202) 555-0634", subtitle: "2 min 47 sec", time: "9:37 AM", type: "answered" },
    { id: "c7-09", callerName: "Tomoko Sato", subtitle: "7 min 5 sec", time: "9:20 AM", type: "outgoing", hasVideo: true, hasTranscript: true },
    { id: "c7-10", callerName: "+1 (718) 555-0512", subtitle: "1 min 55 sec", time: "9:02 AM", type: "answered" },
    { id: "c7-11", callerName: "+1 (408) 555-0176", subtitle: "Missed call", time: "8:45 AM", type: "missed" },
    { id: "c7-12", callerName: "+1 (646) 555-0893", subtitle: "3 min 18 sec", time: "8:27 AM", type: "answered" },
  ],

  // q8 — Palliative care support line: lower volume, longer calls, compassionate care
  q8: [
    { id: "c8-01", callerName: "+1 (415) 555-0842", subtitle: "8 min 15 sec", time: "11:20 AM", type: "answered", hasTranscript: true },
    { id: "c8-02", callerName: "+1 (510) 555-0319", subtitle: "12 min 40 sec", time: "10:55 AM", type: "answered", hasTranscript: true },
    { id: "c8-03", callerName: "+1 (650) 555-0673", subtitle: "6 min 22 sec", time: "10:30 AM", type: "answered" },
    { id: "c8-04", callerName: "+1 (312) 555-0458", subtitle: "9 min 5 sec", time: "10:05 AM", type: "answered", hasTranscript: true },
    { id: "c8-05", callerName: "+1 (617) 555-0921", subtitle: "Missed call", time: "9:40 AM", type: "missed" },
    { id: "c8-06", callerName: "+1 (773) 555-0167", subtitle: "15 min 30 sec", time: "9:15 AM", type: "answered", hasTranscript: true },
    { id: "c8-07", callerName: "+1 (202) 555-0534", subtitle: "7 min 48 sec", time: "8:50 AM", type: "answered" },
    { id: "c8-08", callerName: "+1 (408) 555-0795", subtitle: "10 min 12 sec", time: "8:25 AM", type: "answered", hasTranscript: true },
  ],

  // q9 — Oncology consultation line: moderate volume, some longer calls
  q9: [
    { id: "c9-01", callerName: "+1 (305) 555-0183", subtitle: "3 min 45 sec", time: "11:38 AM", type: "answered" },
    { id: "c9-02", callerName: "+1 (202) 555-0177", subtitle: "Missed call", time: "11:20 AM", type: "missed" },
    { id: "c9-03", callerName: "+1 (415) 555-0629", subtitle: "6 min 18 sec", time: "11:03 AM", type: "answered", hasTranscript: true },
    { id: "c9-04", callerName: "+1 (510) 555-0842", subtitle: "2 min 30 sec", time: "10:45 AM", type: "answered" },
    { id: "c9-05", callerName: "+1 (650) 555-0391", subtitle: "4 min 55 sec", time: "10:28 AM", type: "answered" },
    { id: "c9-06", callerName: "+1 (312) 555-0714", subtitle: "Missed call", time: "10:10 AM", type: "missed" },
    { id: "c9-07", callerName: "+1 (617) 555-0583", subtitle: "7 min 22 sec", time: "9:53 AM", type: "answered", hasTranscript: true },
    { id: "c9-08", callerName: "Ravi Mehta", subtitle: "8 min 10 sec", time: "9:35 AM", type: "outgoing", hasTranscript: true },
    { id: "c9-09", callerName: "+1 (773) 555-0246", subtitle: "1 min 48 sec", time: "9:18 AM", type: "answered" },
    { id: "c9-10", callerName: "+1 (408) 555-0917", subtitle: "3 min 32 sec", time: "9:00 AM", type: "answered" },
    { id: "c9-11", callerName: "+1 (718) 555-0158", subtitle: "Missed call", time: "8:43 AM", type: "missed" },
    { id: "c9-12", callerName: "+1 (202) 555-0463", subtitle: "5 min 8 sec", time: "8:25 AM", type: "answered" },
  ],

  // q10 — Pediatric urgent care triage: busy, anxious parents calling back
  q10: [
    { id: "c10-01", callerName: "+1 (773) 555-0199", subtitle: "Missed call", time: "11:50 AM", type: "missed" },
    { id: "c10-02", callerName: "+1 (312) 555-0250", subtitle: "2 min 18 sec", time: "11:33 AM", type: "answered" },
    { id: "c10-03", callerName: "+1 (773) 555-0199", subtitle: "Missed call", time: "11:15 AM", type: "missed" },
    { id: "c10-04", callerName: "+1 (415) 555-0834", subtitle: "4 min 10 sec", time: "10:58 AM", type: "answered" },
    { id: "c10-05", callerName: "+1 (510) 555-0627", subtitle: "1 min 45 sec", time: "10:40 AM", type: "answered" },
    { id: "c10-06", callerName: "+1 (650) 555-0471", subtitle: "Missed call", time: "10:23 AM", type: "missed" },
    { id: "c10-07", callerName: "+1 (617) 555-0385", subtitle: "3 min 32 sec", time: "10:05 AM", type: "answered" },
    { id: "c10-08", callerName: "+1 (408) 555-0913", subtitle: "2 min 55 sec", time: "9:48 AM", type: "answered", hasTranscript: true },
    { id: "c10-09", callerName: "+1 (773) 555-0199", subtitle: "Forwarded by Kayo", time: "9:30 AM", type: "forwarded" },
    { id: "c10-10", callerName: "+1 (312) 555-0768", subtitle: "1 min 20 sec", time: "9:13 AM", type: "answered" },
    { id: "c10-11", callerName: "+1 (718) 555-0542", subtitle: "Missed call", time: "8:55 AM", type: "missed" },
    { id: "c10-12", callerName: "+1 (202) 555-0391", subtitle: "5 min 48 sec", time: "8:38 AM", type: "answered" },
    { id: "c10-13", callerName: "Jada Collins", subtitle: "4 min 32 sec", time: "8:20 AM", type: "outgoing" },
  ],

  // q11 — Radiology results callback: efficient, mostly short answered calls
  q11: [
    { id: "c11-01", callerName: "+1 (408) 555-0220", subtitle: "1 min 10 sec", time: "11:28 AM", type: "answered" },
    { id: "c11-02", callerName: "+1 (650) 555-0244", subtitle: "0 min 45 sec", time: "11:10 AM", type: "answered" },
    { id: "c11-03", callerName: "+1 (415) 555-0593", subtitle: "1 min 32 sec", time: "10:53 AM", type: "answered" },
    { id: "c11-04", callerName: "+1 (312) 555-0871", subtitle: "0 min 55 sec", time: "10:35 AM", type: "answered" },
    { id: "c11-05", callerName: "+1 (617) 555-0429", subtitle: "Missed call", time: "10:18 AM", type: "missed" },
    { id: "c11-06", callerName: "+1 (510) 555-0716", subtitle: "2 min 5 sec", time: "10:00 AM", type: "answered" },
    { id: "c11-07", callerName: "+1 (773) 555-0384", subtitle: "1 min 18 sec", time: "9:43 AM", type: "answered" },
    { id: "c11-08", callerName: "+1 (202) 555-0647", subtitle: "0 min 52 sec", time: "9:25 AM", type: "answered" },
    { id: "c11-09", callerName: "+1 (718) 555-0213", subtitle: "1 min 40 sec", time: "9:08 AM", type: "answered" },
    { id: "c11-10", callerName: "+1 (408) 555-0558", subtitle: "Missed call", time: "8:50 AM", type: "missed" },
  ],

  // q12 — Post-surgical follow-up: moderate, some forwarded
  q12: [
    { id: "c12-01", callerName: "+1 (617) 555-0233", subtitle: "2 min 55 sec", time: "11:30 AM", type: "answered" },
    { id: "c12-02", callerName: "+1 (212) 555-0301", subtitle: "Forwarded by Leah", time: "11:12 AM", type: "forwarded" },
    { id: "c12-03", callerName: "+1 (503) 555-0289", subtitle: "Missed call", time: "10:55 AM", type: "missed" },
    { id: "c12-04", callerName: "+1 (415) 555-0764", subtitle: "3 min 40 sec", time: "10:37 AM", type: "answered", hasTranscript: true },
    { id: "c12-05", callerName: "+1 (650) 555-0528", subtitle: "1 min 22 sec", time: "10:20 AM", type: "answered" },
    { id: "c12-06", callerName: "+1 (312) 555-0491", subtitle: "4 min 15 sec", time: "10:02 AM", type: "answered" },
    { id: "c12-07", callerName: "+1 (510) 555-0837", subtitle: "Missed call", time: "9:45 AM", type: "missed" },
    { id: "c12-08", callerName: "+1 (773) 555-0162", subtitle: "2 min 8 sec", time: "9:27 AM", type: "answered" },
    { id: "c12-09", callerName: "+1 (617) 555-0945", subtitle: "Forwarded by Maya", time: "9:10 AM", type: "forwarded" },
    { id: "c12-10", callerName: "+1 (408) 555-0623", subtitle: "1 min 50 sec", time: "8:52 AM", type: "answered" },
    { id: "c12-11", callerName: "+1 (202) 555-0318", subtitle: "3 min 5 sec", time: "8:35 AM", type: "answered" },
  ],

  // q13 — Mental health crisis line: longer calls, higher answer rate critical
  q13: [
    { id: "c13-01", callerName: "+1 (415) 555-0310", subtitle: "12 min 40 sec", time: "11:45 AM", type: "answered", hasTranscript: true },
    { id: "c13-02", callerName: "+1 (310) 555-0278", subtitle: "Missed call", time: "11:28 AM", type: "missed" },
    { id: "c13-03", callerName: "+1 (646) 555-0355", subtitle: "8 min 18 sec", time: "11:10 AM", type: "answered", hasTranscript: true },
    { id: "c13-04", callerName: "+1 (510) 555-0429", subtitle: "15 min 5 sec", time: "10:53 AM", type: "answered", hasTranscript: true },
    { id: "c13-05", callerName: "+1 (312) 555-0871", subtitle: "Missed call", time: "10:35 AM", type: "missed" },
    { id: "c13-06", callerName: "+1 (617) 555-0243", subtitle: "10 min 32 sec", time: "10:18 AM", type: "answered", hasTranscript: true },
    { id: "c13-07", callerName: "+1 (773) 555-0694", subtitle: "6 min 48 sec", time: "10:00 AM", type: "answered" },
    { id: "c13-08", callerName: "+1 (202) 555-0517", subtitle: "9 min 22 sec", time: "9:43 AM", type: "answered", hasTranscript: true },
    { id: "c13-09", callerName: "+1 (408) 555-0186", subtitle: "Missed call", time: "9:25 AM", type: "missed" },
    { id: "c13-10", callerName: "+1 (718) 555-0935", subtitle: "11 min 15 sec", time: "9:08 AM", type: "answered", hasTranscript: true },
    { id: "c13-11", callerName: "+1 (650) 555-0742", subtitle: "7 min 30 sec", time: "8:50 AM", type: "answered" },
    { id: "c13-12", callerName: "Wren Calloway", subtitle: "4 min 12 sec", time: "8:33 AM", type: "answered" },
  ],

  // q14 — Labor & delivery triage: very busy, urgent, repeat callers
  q14: [
    { id: "c14-01", callerName: "+1 (718) 555-0402", subtitle: "Missed call", time: "11:52 AM", type: "missed" },
    { id: "c14-02", callerName: "+1 (914) 555-0388", subtitle: "1 min 30 sec", time: "11:35 AM", type: "answered" },
    { id: "c14-03", callerName: "+1 (718) 555-0402", subtitle: "Missed call", time: "11:17 AM", type: "missed" },
    { id: "c14-04", callerName: "+1 (516) 555-0445", subtitle: "3 min 22 sec", time: "11:00 AM", type: "answered" },
    { id: "c14-05", callerName: "+1 (212) 555-0673", subtitle: "2 min 48 sec", time: "10:42 AM", type: "answered" },
    { id: "c14-06", callerName: "+1 (646) 555-0819", subtitle: "Missed call", time: "10:25 AM", type: "missed" },
    { id: "c14-07", callerName: "+1 (973) 555-0534", subtitle: "4 min 15 sec", time: "10:07 AM", type: "answered", hasTranscript: true },
    { id: "c14-08", callerName: "+1 (201) 555-0291", subtitle: "1 min 55 sec", time: "9:50 AM", type: "answered" },
    { id: "c14-09", callerName: "+1 (718) 555-0402", subtitle: "Missed call", time: "9:32 AM", type: "missed" },
    { id: "c14-10", callerName: "+1 (914) 555-0716", subtitle: "5 min 30 sec", time: "9:15 AM", type: "answered" },
    { id: "c14-11", callerName: "+1 (516) 555-0183", subtitle: "2 min 10 sec", time: "8:57 AM", type: "answered" },
    { id: "c14-12", callerName: "+1 (212) 555-0547", subtitle: "Missed call", time: "8:40 AM", type: "missed" },
    { id: "c14-13", callerName: "Carmen Espinoza", subtitle: "6 min 5 sec", time: "8:22 AM", type: "outgoing", hasVideo: true },
    { id: "c14-14", callerName: "+1 (646) 555-0362", subtitle: "3 min 45 sec", time: "8:05 AM", type: "answered" },
  ],

  // q15 — Pharmacy benefits helpline: steady, efficient, mostly answered
  q15: [
    { id: "c15-01", callerName: "+1 (800) 555-0501", subtitle: "1 min 55 sec", time: "11:42 AM", type: "answered" },
    { id: "c15-02", callerName: "+1 (800) 555-0502", subtitle: "0 min 50 sec", time: "11:25 AM", type: "answered" },
    { id: "c15-03", callerName: "+1 (888) 555-0319", subtitle: "2 min 12 sec", time: "11:07 AM", type: "answered" },
    { id: "c15-04", callerName: "+1 (800) 555-0647", subtitle: "1 min 28 sec", time: "10:50 AM", type: "answered" },
    { id: "c15-05", callerName: "+1 (877) 555-0834", subtitle: "Missed call", time: "10:32 AM", type: "missed" },
    { id: "c15-06", callerName: "+1 (800) 555-0215", subtitle: "3 min 5 sec", time: "10:15 AM", type: "answered" },
    { id: "c15-07", callerName: "+1 (888) 555-0478", subtitle: "1 min 42 sec", time: "9:57 AM", type: "answered" },
    { id: "c15-08", callerName: "+1 (800) 555-0593", subtitle: "0 min 58 sec", time: "9:40 AM", type: "answered" },
    { id: "c15-09", callerName: "+1 (877) 555-0162", subtitle: "2 min 30 sec", time: "9:22 AM", type: "answered" },
    { id: "c15-10", callerName: "+1 (800) 555-0741", subtitle: "Missed call", time: "9:05 AM", type: "missed" },
    { id: "c15-11", callerName: "+1 (888) 555-0896", subtitle: "1 min 15 sec", time: "8:47 AM", type: "answered" },
    { id: "c15-12", callerName: "+1 (800) 555-0328", subtitle: "2 min 48 sec", time: "8:30 AM", type: "answered" },
  ],

  // ── Agent-only queue call histories (aq1–aq5) ──

  // aq1 — Outpatient scheduling desk
  aq1: [
    { id: "ca1-01", callerName: "+1 (415) 555-0923", subtitle: "2 min 14 sec", time: "11:38 AM", type: "answered" },
    { id: "ca1-02", callerName: "+1 (650) 555-0187", subtitle: "Missed call", time: "11:21 AM", type: "missed" },
    { id: "ca1-03", callerName: "+1 (510) 555-0456", subtitle: "3 min 42 sec", time: "11:05 AM", type: "answered", hasTranscript: true },
    { id: "ca1-04", callerName: "+1 (408) 555-0712", subtitle: "1 min 8 sec", time: "10:48 AM", type: "answered" },
    { id: "ca1-05", callerName: "+1 (312) 555-0394", subtitle: "Forwarded by Kaya", time: "10:30 AM", type: "forwarded" },
    { id: "ca1-06", callerName: "+1 (617) 555-0835", subtitle: "4 min 15 sec", time: "10:12 AM", type: "answered" },
    { id: "ca1-07", callerName: "+1 (773) 555-0261", subtitle: "0 min 55 sec", time: "9:55 AM", type: "answered" },
    { id: "ca1-08", callerName: "+1 (202) 555-0648", subtitle: "2 min 33 sec", time: "9:37 AM", type: "answered" },
    { id: "ca1-09", callerName: "+1 (718) 555-0502", subtitle: "Missed call", time: "9:18 AM", type: "missed" },
    { id: "ca1-10", callerName: "Camilo Moreno", subtitle: "1 min 48 sec", time: "9:02 AM", type: "outgoing" },
  ],

  // aq2 — Patient transport coordination
  aq2: [
    { id: "ca2-01", callerName: "+1 (213) 555-0771", subtitle: "1 min 5 sec", time: "11:44 AM", type: "answered" },
    { id: "ca2-02", callerName: "+1 (310) 555-0143", subtitle: "2 min 22 sec", time: "11:30 AM", type: "answered" },
    { id: "ca2-03", callerName: "+1 (626) 555-0589", subtitle: "0 min 40 sec", time: "11:14 AM", type: "answered" },
    { id: "ca2-04", callerName: "+1 (818) 555-0367", subtitle: "Missed call", time: "10:55 AM", type: "missed" },
    { id: "ca2-05", callerName: "+1 (424) 555-0812", subtitle: "3 min 10 sec", time: "10:38 AM", type: "answered", hasTranscript: true },
    { id: "ca2-06", callerName: "+1 (323) 555-0256", subtitle: "1 min 35 sec", time: "10:20 AM", type: "answered" },
    { id: "ca2-07", callerName: "+1 (562) 555-0694", subtitle: "2 min 50 sec", time: "10:02 AM", type: "answered" },
    { id: "ca2-08", callerName: "+1 (714) 555-0431", subtitle: "0 min 22 sec", time: "9:45 AM", type: "answered" },
  ],

  // aq3 — Cardiology nurse on-call
  aq3: [
    { id: "ca3-01", callerName: "+1 (469) 555-0912", subtitle: "5 min 2 sec", time: "11:35 AM", type: "answered", hasTranscript: true },
    { id: "ca3-02", callerName: "+1 (972) 555-0385", subtitle: "Missed call", time: "11:18 AM", type: "missed" },
    { id: "ca3-03", callerName: "+1 (214) 555-0746", subtitle: "3 min 28 sec", time: "11:02 AM", type: "answered" },
    { id: "ca3-04", callerName: "+1 (817) 555-0123", subtitle: "Missed call", time: "10:44 AM", type: "missed" },
    { id: "ca3-05", callerName: "+1 (682) 555-0578", subtitle: "2 min 15 sec", time: "10:28 AM", type: "answered" },
    { id: "ca3-06", callerName: "+1 (469) 555-0834", subtitle: "4 min 40 sec", time: "10:10 AM", type: "answered" },
    { id: "ca3-07", callerName: "+1 (972) 555-0291", subtitle: "Forwarded by Ravi", time: "9:52 AM", type: "forwarded" },
    { id: "ca3-08", callerName: "+1 (214) 555-0657", subtitle: "1 min 18 sec", time: "9:35 AM", type: "answered" },
    { id: "ca3-09", callerName: "+1 (817) 555-0403", subtitle: "3 min 55 sec", time: "9:17 AM", type: "answered" },
    { id: "ca3-10", callerName: "Camilo Moreno", subtitle: "2 min 10 sec", time: "8:58 AM", type: "outgoing" },
    { id: "ca3-11", callerName: "+1 (682) 555-0189", subtitle: "0 min 45 sec", time: "8:40 AM", type: "answered" },
  ],

  // aq4 — Insurance verification line
  aq4: [
    { id: "ca4-01", callerName: "+1 (602) 555-0843", subtitle: "Missed call", time: "11:41 AM", type: "missed" },
    { id: "ca4-02", callerName: "+1 (480) 555-0317", subtitle: "Missed call", time: "11:25 AM", type: "missed" },
    { id: "ca4-03", callerName: "+1 (623) 555-0692", subtitle: "6 min 12 sec", time: "11:08 AM", type: "answered", hasTranscript: true },
    { id: "ca4-04", callerName: "+1 (928) 555-0154", subtitle: "2 min 45 sec", time: "10:50 AM", type: "answered" },
    { id: "ca4-05", callerName: "+1 (520) 555-0478", subtitle: "Missed call", time: "10:33 AM", type: "missed" },
    { id: "ca4-06", callerName: "+1 (602) 555-0561", subtitle: "4 min 30 sec", time: "10:15 AM", type: "answered" },
    { id: "ca4-07", callerName: "+1 (480) 555-0729", subtitle: "1 min 55 sec", time: "9:58 AM", type: "answered" },
    { id: "ca4-08", callerName: "+1 (623) 555-0243", subtitle: "Forwarded by Nina", time: "9:40 AM", type: "forwarded" },
    { id: "ca4-09", callerName: "+1 (928) 555-0886", subtitle: "3 min 18 sec", time: "9:22 AM", type: "answered" },
    { id: "ca4-10", callerName: "+1 (520) 555-0135", subtitle: "Missed call", time: "9:05 AM", type: "missed" },
    { id: "ca4-11", callerName: "+1 (602) 555-0617", subtitle: "2 min 5 sec", time: "8:48 AM", type: "answered" },
    { id: "ca4-12", callerName: "+1 (480) 555-0374", subtitle: "0 min 38 sec", time: "8:30 AM", type: "answered" },
  ],

  // aq5 — Rehab & physical therapy intake
  aq5: [
    { id: "ca5-01", callerName: "+1 (303) 555-0921", subtitle: "1 min 32 sec", time: "11:40 AM", type: "answered" },
    { id: "ca5-02", callerName: "+1 (720) 555-0458", subtitle: "2 min 48 sec", time: "11:22 AM", type: "answered", hasTranscript: true },
    { id: "ca5-03", callerName: "+1 (719) 555-0267", subtitle: "Missed call", time: "11:05 AM", type: "missed" },
    { id: "ca5-04", callerName: "+1 (970) 555-0634", subtitle: "3 min 20 sec", time: "10:48 AM", type: "answered" },
    { id: "ca5-05", callerName: "+1 (303) 555-0185", subtitle: "1 min 10 sec", time: "10:30 AM", type: "answered" },
    { id: "ca5-06", callerName: "+1 (720) 555-0793", subtitle: "2 min 5 sec", time: "10:12 AM", type: "answered" },
    { id: "ca5-07", callerName: "Camilo Moreno", subtitle: "4 min 35 sec", time: "9:55 AM", type: "outgoing", hasVideo: true },
    { id: "ca5-08", callerName: "+1 (719) 555-0541", subtitle: "0 min 52 sec", time: "9:38 AM", type: "answered" },
    { id: "ca5-09", callerName: "+1 (970) 555-0312", subtitle: "1 min 45 sec", time: "9:20 AM", type: "answered" },
  ],
};

/* ══════════════════════════════════════════════════════
   Inject supervisors as leads into queues
   ══════════════════════════════════════════════════════ */

const supervisorLeadsByQueue: Record<string, Person[]> = {};
for (const sup of otherSupervisors) {
  const presences: PresenceStatus[] = ["available", "busy", "away"];
  const person: Person = {
    id: sup.id,
    name: sup.name,
    avatar: sup.avatar,
    role: "lead",
    optedIn: false,
    status: presences[Math.abs(sup.id.charCodeAt(sup.id.length - 1)) % presences.length],
  };
  for (const qId of sup.queueIds) {
    if (!supervisorLeadsByQueue[qId]) supervisorLeadsByQueue[qId] = [];
    supervisorLeadsByQueue[qId].push(person);
  }
}

for (const queue of queues) {
  const extraLeads = supervisorLeadsByQueue[queue.id];
  if (extraLeads) {
    const existingLeadCount = queue.people.filter((p) => p.role === "lead").length;
    queue.people.splice(existingLeadCount, 0, ...extraLeads);
  }
}

/* ══════════════════════════════════════════════════════
   Inject agent user into all queues
   ══════════════════════════════════════════════════════ */

// Varied opt-in pattern for agent user per queue (for demo variety)
const AGENT_OPT_PATTERN = [true, false, true, false, false, true, false, true, false, true, false, false, true, false, true, true, false, true, false, true];

for (let i = 0; i < queues.length; i++) {
  const queue = queues[i];
  const isOptedIn = AGENT_OPT_PATTERN[i % AGENT_OPT_PATTERN.length];
  queue.people.push({ ...agentUser, optedIn: isOptedIn });
  if (isOptedIn) {
    queue.optedInCount += 1;
  }
}