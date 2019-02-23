<template>
    <ApolloMutation :mutation="$options.mutation" :variables="{ title, description, explaination }">
        <form class="col-sm-6" slot-scope="{ mutate, loading }" @submit.prevent="mutate()">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter project title" v-model="title">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" placeholder="Description" v-model="description">
            </div>
            <div class="form-group">
                <label for="explaination">Explaination</label>
                <textarea type="text" class="form-control" id="explaination" placeholder="Explaination" rows="5" v-model="explaination" />
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">Add Project</button>
        </form>
    </ApolloMutation>
</template>

<script>
import gql from 'graphql-tag'
export default {
    props: {
        title: String,
        description: String,
        explaination: String,
    },
    mutation: gql`
        mutation ProjectAdd($title: String!, $description: String!, $explaination: String!) {
            createProject(
                title: $title
                description: $description
                explaination: $explaination
                user: 1
                ){
                    description
                    title
                    user {
                    name
                    }
                }
        }
    `
}
</script>
