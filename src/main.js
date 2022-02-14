import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import { generateHex, generateRGB, generateHSL } from './utils'
import './style.css'

Alpine.plugin(persist)

window.addEventListener('DOMContentLoaded', () => {
    window.Alpine = Alpine
    window.Alpine.start()
})

document.addEventListener('alpine:init', main)

function main() {
    Alpine.data('generateColor', function () {
        return {
            format: this.$persist('hex').as('format'),
            savedColors: this.$persist([]).as('saved_colors'),
            color: generateHex(),
            fillSaveBtn: false,

            handleSaveColor() {
                if (!this.savedColors.includes(this.color)) {
                    this.savedColors.push(this.color)
                }
            },

            handleShowColor(el) {
                this.color = el.children[0].innerHTML.trim()
            },

            handleRemoveColor(el) {
                this.savedColors.splice(
                    this.savedColors.indexOf(el.children[0].innerHTML.trim()),
                    1
                )
            },

            handleGenerateColor() {
                if (this.format === 'hex') {
                    this.color = generateHex()
                } else if (this.format === 'rgb') {
                    this.color = generateRGB()
                } else {
                    this.color = generateHSL()
                }
                this.fillSaveBtn = false
                document.body.style.background = this.color
            },

            init() {
                this.handleGenerateColor()

                this.$watch('color', (value) => {
                    document.body.style.background = value
                })

                this.$watch('savedColors', (value) => {
                    this.fillSaveBtn = value.includes(this.color) ? true : false
                })
            }
        }
    })
}
