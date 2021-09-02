<template>
  <div class="home">
    <job-feed :job-listings="[]" :job-locations="jobLocationFilters" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JobFeed from '@/components/JobFeed.vue';
import BaseApi from '@/api-requests/api';
import { JobLocation } from '@/models/models';

@Component({
  components: {
    JobFeed,
  },
})
export default class Home extends Vue {
  private mojobApi: BaseApi | null = null;
  private jobLocationFilters: JobLocation[] = [];

  /**
   * Here you can do necessary request to our
   * public test-API in order to retrieve a list of job listings and a list of
   * location filters.
   *
   * You can test the endpoints and see the documentation at:
   * https://test-api.mojob.io/public/docs/
   *
   * @private
   */
  private async mounted() {
    // Here is an example on how to retrieve job location filters
    this.mojobApi = new BaseApi(
      'https://test-api.mojob.io/public/',
      this.axios
    );
    try {
      this.jobLocationFilters = await this.mojobApi.getJobLocations();
      console.log(JSON.stringify(this.jobLocationFilters, null, 2));
      console.log(this.jobLocationFilters);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
