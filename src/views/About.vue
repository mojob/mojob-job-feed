<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/mojob_logo_on_white.png" />
    <h1>Mojob</h1>
    <h2>A recruitment software for service companies</h2>

    <h3>Our mission and vision</h3>
    <ul>
      <li>
        <p>
          Our mission is to help the right company and candidate to find each
          other.
        </p>
      </li>
      <li>
        <p>
          We would like to improve how companies attract and recruit talent by
          automating and simplifying the sourcing and recruitment process.
        </p>
      </li>
    </ul>
    <h3>Some of the features we offer our customers</h3>
    <ul>
      <li>
        <p>Job ad builder.</p>
      </li>
      <li>
        <p>
          Career site builder. See ours
          <a href="https://careers.mojob.io/" target="_blank">here</a>
        </p>
      </li>
      <li>
        <p>Generic job process builder</p>
      </li>
      <li>
        <p>A tree based company structure, fitting any type of company.</p>
      </li>
      <li>
        <p>
          Automated recruitment processes. Includes automated job process step
          moves based on screening question answers, delivered video interviews,
          selected interview time slots, reference checks ++
        </p>
      </li>
      <li>
        <p>
          The best ATS(Applicant tracking system) mobile app for recruiters.
        </p>
      </li>
      <li>
        We also have a mobile app for job seekers, where applicants can apply
        through a job feed. We are very proud of our app
        <a
          href="https://apps.apple.com/no/app/mojob-for-job-seekers/id942880959"
          target="_blank"
        >
          ratings.
        </a>
      </li>
    </ul>

    <a href="https://careers.mojob.io/" target="_blank"></a>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  width: 50%;
  margin: auto;
}
img {
  width: 150px;
  height: 150px;
}
</style>
