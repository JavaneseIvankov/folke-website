<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

beforeEach(function () {
    // We can define a temporary route to test the middleware isolated,
    // or we can test an existing admin route. Testing an existing route is better.
});

it('aborts with 403 when user does not have required role', function () {
    $user = User::factory()->create(['role' => 'user']);

    // Assuming admin dashboard requires admin role
    $response = $this->actingAs($user)->get('/admin/products/create');

    $response->assertStatus(403);
});

it('allows request when user has required role', function () {
    $admin = User::factory()->create(['role' => 'admin']);

    $response = $this->actingAs($admin)->get('/admin/products/create');

    // It should either be a success or redirect (but not 403)
    // If it's an inertia page, it usually returns 200.
    $response->assertStatus(200);
});

it('aborts with 403 when user is not authenticated at all', function () {
    // Actually the 'auth' middleware will catch this first and redirect to login,
    // but if it didn't, RoleMiddleware would abort 403.
    // Let's test the route without auth middleware explicitly if we wanted to test RoleMiddleware isolated.
    // Let's just create a test route for this to be sure:
    Route::middleware('role:admin')->get('/test-role-middleware', function () {
        return 'OK';
    });

    $response = $this->get('/test-role-middleware');

    $response->assertStatus(403);
});
