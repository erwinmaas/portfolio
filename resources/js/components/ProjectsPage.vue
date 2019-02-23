<template>
    <ApolloQuery :query="$options.query">
        <template slot-scope="{result: { loading, data, error }}">
            <div v-if="loading">Loading...</div>
            <div v-else-if="data" class="row">
                <project-list class="col-sm-6" :projects="data.me.project"></project-list>
                <project-add class="col-sm-6"></project-add>
            </div>

            <!-- <div v-else-if="data">{{ data }}</div> -->
        </template>
    </ApolloQuery>
</template>

<script>
import ProjectList from './projects/ProjectList';
import ProjectAdd from './projects/ProjectAdd';
import gql from 'graphql-tag';

export default {
    components: { ProjectList, ProjectAdd },
    query: gql`
        query ProjectsPage {
            me {
                id
                name
                project {
                    title
                    description
                    explaination
                }
            }
        }
        `
}
</script>
