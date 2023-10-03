import 'kaboom/global'
import kaboom from 'kaboom'

export default function Credits() {
	add([
		text(`What The Floosh Game`, {
			size: 28,
			width: width()
		}),
		pos(10,10),
	])
	add([
		text("Criador:", {
			size: 20,
			width: width()
		}),
		pos(10,40)
	])
	add([
		text("Igor Figueiredo", {
			size: 14,
			width: width()
		}),
		pos(10, 80)
	])
	add([
		text("Músicas:", {
			size: 20,
			width: width()
		}),
		pos(10, 110)
	])
	add([
		text("20190724 - Mac Demarco", {
			size: 14,
			width: width()
		}),
		pos(10, 140)
	])
	add([
		text("20190724 2 - Mac Demaeco", {
			size: 14,
			width: width()
		}),
		pos(10, 160)
	])
	add([
		text("Criado com Kaboom.js", {
			size: 20,
			width: width()
		}),
		pos(10, 200),
		area(),
		"kaboomgit"
	])
	add([
		text("Voltar", {
			size: 24,
			width: width()
		}),
		pos(10, 250),
		area(),
		"voltar"
	])
	onClick("kaboomgit", () => {
		window.open("https://github.com/replit/kaboom")
	})
	onClick("voltar", () => {
		go("menu")
	})
}