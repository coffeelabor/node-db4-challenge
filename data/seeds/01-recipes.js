exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([{ name: "mac and cheese" }]);
  // Inserts seed entries
};
