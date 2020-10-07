<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'User',
                'email' => 'user@devtest.com',
                'password' => bcrypt('secret'),
                'is_admin' => false
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@devtest.com',
                'password' => bcrypt('secret'),
                'is_admin' => true
            ]

        ];

        User::insert($users);
    }
}
