<template>
  <div class="home">
    <job-feed
      :job-listings="[]"
      :position-functions="positionFunctionFilters"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JobFeed from '@/components/JobFeed.vue';
import BaseApi from '@/api-requests/api';
import { IPage, PositionFunction } from '@/models/models';

@Component({
  components: {
    JobFeed,
  },
})
export default class Home extends Vue {
  private mojobApi: BaseApi | null = null;
  private positionFunctionFilters: PositionFunction[] = [];

  /**
   * Here you can do necessary request to our
   * public test-API in order to retrieve a list of job listings and a list of
   * position function filters.
   *
   * You can test the endpoints and see the documentation at:
   * https://test-api.mojob.io/public/docs/
   *
   * @private
   */
  private async mounted() {
    // Here is an example on how to retrieve job position function filters
    this.mojobApi = new BaseApi(
      'https://test-api.mojob.io/public/',
      this.axios
    );
    try {
      const jobLocationFiltersResponsePage: IPage<PositionFunction> =
        await this.mojobApi.getPositionFunctions();
      if (jobLocationFiltersResponsePage.results) {
        this.positionFunctionFilters = jobLocationFiltersResponsePage.results;
        console.log(JSON.stringify(this.positionFunctionFilters, null, 2));
        console.log(this.positionFunctionFilters);
      } else {
        console.log('Failed loading position function filters');
      }
    } catch (e) {
      console.log('Failed loading position function filters');
      console.log(e);
    }
  }
}
</script>
