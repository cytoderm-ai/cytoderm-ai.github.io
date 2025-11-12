<script>
export default {
  data() {
    return {
      video_paths: [
        { src: '/chunkflow/video/people.mp4', caption: 'People View' },
        { src: '/chunkflow/video/main.mp4', caption: 'Wrist View' },
        { src: '/chunkflow/video/side.mp4', caption: 'Front View' },
        { src: '/chunkflow/video/top.mp4', caption: 'Top View' }
      ],
      cube_videos: [
        {src: '/chunkflow/video/cube_wrist.mp4', caption: 'Wrist View'},
        {src: '/chunkflow/video/cube_front.mp4', caption: 'Front View'},
        {src: '/chunkflow/video/cube_top.mp4', caption: 'Top View'},
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      const videos = document.querySelectorAll('.video-item, .cube-video-item')
      videos.forEach(video => {
        video.playbackRate = 2.0
        video.volume = 0
      })
    })
  }
}
</script>

<template>
  <el-divider />

  <el-row justify="center">
    <h1 class="section-title">Grasp the Top Strip of Cloth</h1>
  </el-row>

  <el-row justify="center">
    <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="20">
      <el-row :gutter="20" justify="center">
        <el-col
          v-for="(video, index) in video_paths"
          :key="index"
          :xs="24"
          :sm="12"
          :md="6"
          :lg="6"
          :xl="6"
          style="margin-bottom: 20px"
        >
          <div class="main-video-wrapper">
            <div class="video-container">
              <video
                :src="video.src"
                controls
                muted
                loop
                autoplay
                playsinline
                class="video-item"
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onvolumechange="this.muted=true"
              >
                您的浏览器不支持视频播放。
              </video>
              <div class="video-watermark">×2</div>
            </div>
            <p class="main-video-caption">{{ video.caption }}</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

  <el-divider />

  <el-row justify="center">
    <h1 class="section-title">Grab Cube and Place in Groove</h1>
  </el-row>

  <el-row justify="center">
    <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="16">
      <el-row :gutter="20" justify="center">
        <el-col
          v-for="(video, index) in cube_videos"
          :key="'cube-' + index"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          :xl="8"
          style="margin-bottom: 20px"
        >
          <div class="cube-video-wrapper">
            <div class="cube-video-container">
              <video
                :src="video.src"
                controls
                muted
                loop
                autoplay
                playsinline
                class="cube-video-item"
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onvolumechange="this.muted=true"
              >
                您的浏览器不支持视频播放。
              </video>
              <div class="video-watermark">×2</div>
            </div>
            <p class="video-caption">{{ video.caption }}</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped>
.section-title {
  font-size: clamp(20px, 1.4vw, 150px);
  margin-bottom: 20px;
}

.video-container {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #000;
  aspect-ratio: 16 / 9;
  position: relative;
}

.video-item {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.main-video-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-video-caption {
  margin-top: 10px;
  font-size: clamp(14px, 0.9vw, 16px);
  color: #666;
  text-align: center;
  font-family: 'MyFont', sans-serif;
  font-weight: 500;
}

.video-watermark {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 15px;
  font-weight: bold;
  pointer-events: none;
  z-index: 10;
  font-family: Arial, sans-serif;
}

/* Cube videos section */
.cube-video-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cube-video-container {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #000;
  aspect-ratio: 16 / 9;
  position: relative;
}

.cube-video-item {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.video-caption {
  margin-top: 10px;
  font-size: clamp(14px, 0.9vw, 16px);
  color: #666;
  text-align: center;
  font-family: 'MyFont', sans-serif;
  font-weight: 500;
}
</style>
