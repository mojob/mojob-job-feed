<template>
  <div class="job-feed">INPUT JOB FEED DESIGN HERE</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { JobListing, PositionFunction } from '@/models/models';

@Component
export default class JobFeed extends Vue {
  @Prop({ default: () => [], type: Array as () => JobListing[] })
  private jobListings!: JobListing[];
  @Prop({ default: () => [], type: Array as () => PositionFunction[] })
  private positionFunctions!: PositionFunction[];
}
</script>

<style scoped></style>
