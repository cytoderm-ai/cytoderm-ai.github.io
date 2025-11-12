<script setup>
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <div style="text-align: justify">
          <p style="font-size: clamp(10px, 1.1vw, 40px); line-height: 1.6">
            We present <strong style="color: #5db3e6">ChunkFlow</strong>,
            a <span style="color: #5db3e6">seam-aware chunked execution framework</span>
            for vision–language action models that eliminates boundary jitter between short,
            real-time action chunks by coupling a zero-latency deterministic overlap blending layer with training that makes chunks intrinsically blendable.
            Each chunk is partitioned into <strong style="color: #5db3e6">frozen, editable, and future zones</strong>
            to align execution semantics, and the policy is optimized with <span style="color: #5db3e6">
            temporal continuity penalties</span>
            (first- and second-order) together with a <strong style="color: #5db3e6">boundary-consistency objective</strong>
            applied to raw pre-blending seam pairs. Robustness is improved via stochastic history corruption and scheduled sampling,
            while deployment alignment is achieved through executed-history fine-tuning using <strong style="color: #5db3e6">
              Advantage-Weighted Actor-Critic (AWAC)</strong> and <span style="color: #5db3e6">expectile critics</span>
              with continuity and boundary terms kept active. Under mild smoothness assumptions the pre-blending seam discrepancy shrinks as overlap grows.
              Experiments on <strong style="color: #5db3e6">CALVIN</strong>, <strong style="color: #5db3e6">LIBERO</strong>,
              and real-world data from a self-developed robotic arm show that <strong style="color: #5db3e6">ChunkFlow</strong>
              preserves throughput with no extra planning latency and consistently outperforms RTC and strong chunked baselines in task success and seam smoothness.
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>
