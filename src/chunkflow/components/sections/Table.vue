<script>
export default {
  data() {
    return {
      images: [
        {
          label: 'Trajectory Smoothness Spectrum',
          src: '/chunkflow/image/smoothness_spectrum.png'
        },
        {
          label: 'Smooth Action Execution Analysis',
          src: '/chunkflow/image/Chunkflow_diff_EE.png'
        },
        {
          label: 'High-Frequency Energy Spectrum',
          src: '/chunkflow/image/hf_energy.png'
        },
        {
          label: 'Success vs. Smoothness',
          src: '/chunkflow/image/success_smoothness_tradeoff.png'
        }
      ],
      calvinData: [
        { method: 'HULC', type: 'Classic BC/RL', success: '0.67', msd1: '0.117', msd2: '0.296', msd3: '0.956', bjump: '0.241', bratio: '1.094', hf: '0.575', tv: '0.056' },
        { method: 'SPIL', type: 'Classic BC/RL', success: '1.71', msd1: '0.107', msd2: '0.228', msd3: '0.703', bjump: '0.253', bratio: '2.231', hf: '1.000', tv: '0.028' },
        { method: '3D Diffuser Actor', type: 'Diffusion', success: '3.27', msd1: '0.259', msd2: '0.574', msd3: '1.790', bjump: '0.212', bratio: '2.676', hf: '0.455', tv: '0.013' },
        { method: 'VPP', type: 'Diffusion', success: '4.29', msd1: '0.096', msd2: '0.181', msd3: '0.535', bjump: '0.237', bratio: '1.646', hf: '1.000', tv: '0.035' },
        { method: 'FLOWER', type: 'Diffusion', success: '4.54', msd1: '0.161', msd2: '0.382', msd3: '1.191', bjump: '0.443', bratio: '2.367', hf: '0.460', tv: '0.044' },
        { method: 'GR-1', type: 'VLA', success: '3.06', msd1: '0.082', msd2: '0.165', msd3: '0.496', bjump: '0.097', bratio: '2.224', hf: '0.999', tv: '0.006' },
        { method: 'Seer', type: 'VLA', success: '3.50', msd1: '0.091', msd2: '0.186', msd3: '0.556', bjump: '0.297', bratio: '1.957', hf: '0.442', tv: '0.007' },
        { method: 'UniVLA', type: 'VLA', success: '3.80', msd1: '0.118', msd2: '0.238', msd3: '0.714', bjump: '0.251', bratio: '4.109', hf: '0.488', tv: '0.009' },
        { method: 'ChunkFlow (Ours)', type: 'Ours', success: '4.30', msd1: '0.075', msd2: '0.154', msd3: '0.512', bjump: '0.209', bratio: '1.471', hf: '0.431', tv: '0.001', highlight: true }
      ],
      liberoData: [
        { method: 'OpenVLA', success: '53.7', msd1: '0.083', msd2: '0.229', msd3: '0.743', bjump: '0.166', bratio: '1.145', hf: '0.862', tv: '0.031', arl: '219.43' },
        { method: 'VPP', success: '38.9', msd1: '0.133', msd2: '0.255', msd3: '0.732', bjump: '0.738', bratio: '5.702', hf: '0.394', tv: '0.029', arl: '13.91' },
        { method: 'PI0.5', success: '92.6', msd1: '0.095', msd2: '0.249', msd3: '0.812', bjump: '0.167', bratio: '1.401', hf: '0.494', tv: '0.023', arl: '9.04' },
        { method: 'PI0.5-RTC', success: '83.7', msd1: '0.089', msd2: '0.240', msd3: '0.729', bjump: '0.115', bratio: '0.850', hf: '0.342', tv: '0.018', arl: '18.47' },
        { method: 'CLIP-RT', success: '83.8', msd1: '0.135', msd2: '0.302', msd3: '0.916', bjump: '0.179', bratio: '1.350', hf: '0.999', tv: '0.026', arl: '6.86' },
        { method: 'Seer', success: '87.7', msd1: '0.141', msd2: '0.279', msd3: '0.639', bjump: '0.195', bratio: '1.602', hf: '0.337', tv: '0.022', arl: '14.25' },
        { method: 'ChunkFlow (Ours)', success: '92.4', msd1: '0.042', msd2: '0.197', msd3: '0.235', bjump: '0.082', bratio: '0.082', hf: '0.135', tv: '0.011', arl: '4.43', highlight: true }
      ]
    }
  }
}
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">Experimental Resultss</h1>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="18">
        <el-card class="card">
          <el-tabs class="demo-tabs" :model-value="images[0].label">
            <!-- Image Tabs -->
            <el-tab-pane
              v-for="(image, index) in images"
              :key="index"
              :label="image.label"
              :name="image.label"
            >
              <div class="tab-content">
                <el-image
                  :src="image.src"
                  fit="contain"
                  :preview-src-list="images.map(img => img.src)"
                  :initial-index="index"
                  :class="['result-image', `result-image-${index}`]"
                >
                  <template #error>
                    <div class="image-error">
                      <span>加载失败</span>
                    </div>
                  </template>
                </el-image>
              </div>
            </el-tab-pane>

            <!-- CALVIN Benchmark Table -->
            <el-tab-pane label="CALVIN Benchmark" name="calvin">
              <div class="tab-content table-content">
                <h3 class="table-caption">Main results on CALVIN ABC-D benchmark</h3>
                <div class="table-wrapper">
                  <el-table :data="calvinData" stripe style="width: 100%" :header-cell-style="{background: '#f5f7fa', fontFamily: 'MyFont'}">
                    <el-table-column prop="method" label="Method" min-width="140">
                      <template #default="scope">
                        <span :class="{ 'highlight-row': scope.row.highlight }">{{ scope.row.method }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="success" label="Success ↑" min-width="85" sortable />
                    <el-table-column prop="msd1" label="MSD-Δa ↓" min-width="95" sortable />
                    <el-table-column prop="msd2" label="MSD-Δ²a ↓" min-width="105" sortable />
                    <el-table-column prop="msd3" label="MSD-Δ³a ↓" min-width="105" sortable />
                    <el-table-column prop="bjump" label="Bjump ↓" min-width="85" sortable />
                    <el-table-column prop="bratio" label="Bratio ↓" min-width="85" sortable />
                    <el-table-column prop="hf" label="HF_ratio ↓" min-width="100" sortable />
                    <el-table-column prop="tv" label="TV-L1 ↓" min-width="100" sortable />
                  </el-table>
                </div>
              </div>
            </el-tab-pane>

            <!-- LIBERO Benchmark Table -->
            <el-tab-pane label="LIBERO Benchmark" name="libero">
              <div class="tab-content table-content">
                <h3 class="table-caption">Cross-Dataset Generalization on LIBERO benchmark</h3>
                <div class="table-wrapper">
                  <el-table :data="liberoData" stripe style="width: 100%" :header-cell-style="{background: '#f5f7fa', fontFamily: 'MyFont'}">
                    <el-table-column prop="method" label="Method" min-width="130">
                      <template #default="scope">
                        <span :class="{ 'highlight-row': scope.row.highlight }">{{ scope.row.method }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="success" label="Long SR(%) ↑" min-width="105" sortable />
                    <el-table-column prop="msd1" label="MSD-Δa ↓" min-width="95" sortable />
                    <el-table-column prop="msd2" label="MSD-Δ²a ↓" min-width="105" sortable />
                    <el-table-column prop="msd3" label="MSD-Δ³a ↓" min-width="105" sortable />
                    <el-table-column prop="bjump" label="Bjump ↓" min-width="85" sortable />
                    <el-table-column prop="bratio" label="Bratio ↓" min-width="85" sortable />
                    <el-table-column prop="hf" label="HF_ratio ↓" min-width="100" sortable />
                    <el-table-column prop="tv" label="TV-L1 ↓" min-width="85" sortable />
                    <el-table-column prop="arl" label="ARL(ms) ↓" min-width="95" sortable />
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.card {
  margin-top: 20px;
}

.section-title {
  font-size: clamp(20px, 1.4vw, 150px);
}

.tab-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.table-content {
  width: 100%;
  padding: 10px;
}

.table-caption {
  font-size: clamp(14px, 1vw, 18px);
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'MyFont', sans-serif;
}

.table-wrapper {
  width: 100%;
}

.highlight-row {
  color: #e74c3c;
  font-weight: 700;
}

:deep(.el-table) {
  font-family: 'MyFont', sans-serif;
  font-size: clamp(11px, 0.85vw, 14px);
  table-layout: fixed;
}

:deep(.el-table th) {
  font-weight: 600;
}

:deep(.el-table th .cell) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
}

:deep(.el-table td) {
  padding: 8px 0;
}

:deep(.el-table .highlight-row) {
  color: #e74c3c;
  font-weight: 700;
}

:deep(.el-table .caret-wrapper) {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin-left: 4px;
  height: 14px;
}

.image-title {
  font-size: clamp(16px, 1.1vw, 22px);
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'MyFont', sans-serif;
}

.result-image {
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.result-image-0 {
  width: 60%;
  max-width: 600px;
}

.result-image-1 {
  width: 100%;
  max-width: 100%;
}

.result-image-2 {
  width: 80%;
  max-width: 800px;
}

.result-image-3 {
  width: 60%;
  max-width: 700px;
}

.result-image:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .result-image-0,
  .result-image-1,
  .result-image-2,
  .result-image-3 {
    width: 100%;
    max-width: 100%;
  }
}

.image-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #999;
  font-size: 14px;
}

:deep(.el-tabs__item) {
  font-family: 'MyFont', sans-serif;
  font-size: clamp(12px, 0.8vw, 40px);
}
</style>