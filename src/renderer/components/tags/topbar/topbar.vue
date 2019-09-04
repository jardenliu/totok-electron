/**
 * @name topbar
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午11:37:59
 */
 
<template>
    <div class="topbar">
        <div class="left"></div>
        <div class="right">
            <div class="menus"
                v-if="currentPlatform !== 'darwin'">
                <button class="menu min-btn"
                    @click="broadcastIPCEvent('window-minimize')"><i class="iconfont icon-minimize"></i></button>
                <button class="menu max-btn"
                    @click="broadcastIPCEvent('window-maximize')"><i class="iconfont icon-maximize"></i></button>
                <button class="menu close-btn"
                    @click="broadcastIPCEvent('window-close')"><i class="iconfont icon-close"></i></button>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped src="./topbar.styl"></style>
<style  scoped>
.topbar {
    -webkit-app-region: drag;
}

.menu {
    -webkit-app-region: no-drag;
}
</style>