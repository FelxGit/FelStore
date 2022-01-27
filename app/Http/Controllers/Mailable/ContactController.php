<?php

namespace App\Http\Controllers\Mailable;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs\ContactJob;
use Carbon\Carbon;

class ContactController extends Controller
{
    public function initContact(Request $request)
    {
        $job = (new ContactJob($request->all()))->delay(Carbon::now()->addSeconds(5));
        dispatch($job);
    }
}
