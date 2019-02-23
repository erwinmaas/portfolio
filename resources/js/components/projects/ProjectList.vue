<template>
    <div class="text-center">
        <h2>Current Projects</h2>

        <div class="row">
            <div class="col-6" v-for="project in projects" :key="project.id">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        projects: Array,
    }
}
</script>

