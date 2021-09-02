<template>
  <div class="job-feed">INPUT JOB FEED DESIGN HERE</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { JobListing, JobLocation } from '@/models/models';

@Component
export default class JobFeed extends Vue {
  @Prop({ default: () => [], type: Array as () => JobListing[] })
  private jobListings!: JobListing[];
  @Prop({ default: () => [], type: Array as () => JobLocation[] })
  private jobLocations!: JobListing[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
