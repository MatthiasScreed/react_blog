<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\User::create([
            'name' => 'Warlord',
            'email' => 'christopher.massamba@gmail.com',
            'password' => bcrypt('Major7891'),
            'is_admin' => 1
        ]);
    }
}
