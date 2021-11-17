<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Role;
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
        $roles = Role::all();
        $role_admin_id = null; $role_user_id = null;

        foreach($roles as $role){
            if($role->name === 'admin'){
                $role_admin_id = $role->id;
            }
            if($role->name === 'user'){
                $role_user_id = $role->id;
            }
        }

        $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@devtest.com',
                'password' => bcrypt('secret'),
                'role_id' => $role_admin_id
            ],
            [
                'name' => 'User',
                'email' => 'user@devtest.com',
                'password' => bcrypt('secret'),
                'role_id' => $role_user_id
            ]
        ];

        User::insert($users);
    }
}
