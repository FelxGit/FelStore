<template>
    <div id="app">
    <h1>Hello App!</h1>
    <p>
        <!-- use router-link component for navigation. -->
        <router-link to="/router-link-sample">Router Link</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    </div>
</template>