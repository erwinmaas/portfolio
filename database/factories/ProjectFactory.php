<?php

use Faker\Generator as Faker;

$factory->define(App\Project::class, function (Faker $faker) {
    return [
        'title'      => $faker->words(1, true),
        'description' => $faker->text,
        'explaination'   => $faker->paragraph,
        'user_id'   => rand(1,10),
    ];
});
