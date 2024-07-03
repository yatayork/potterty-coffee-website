<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: import.meta.env.VITE_MAP_KEY,
    version: 'weekly',
    libraries: ['places'],
});

const apiPromise = loader.load();



const center = { lat: 24.378835, lng: 120.758986 }



</script>

<template>
    <GoogleMap :api-promise="apiPromise" style="width: 50%; height: 400px;" :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>