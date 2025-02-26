import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Layout from "../components/Layout/Layout"
import Head from "next/head"
import { capitalizeRoute } from "../utils"
import { pages } from "../data/pages"

// Components
import Alerts from "../components/ContentTemplates/AlertsTemplate"
import Animations from "../components/ContentTemplates/AnimationsTemplate"
import Audio from "../components/ContentTemplates/AudioTemplate"
import Breadcrumbs from "../components/ContentTemplates/BreadcrumbsTemplate"
import Buttons from "../components/ContentTemplates/ButtonsTemplate"
import Captchas from "../components/ContentTemplates/CaptchasTemplate"
import Charts from "../components/ContentTemplates/ChartsTemplate"
import Forms from "../components/ContentTemplates/FormsTemplate"
import Headings from "../components/ContentTemplates/HeadingsTemplate"
import Icons from "../components/ContentTemplates/IconsTemplate"
import Images from "../components/ContentTemplates/ImagesTemplate"
import Links from "../components/ContentTemplates/LinksTemplate"
import Lists from "../components/ContentTemplates/ListsTemplate"
import Menus from "../components/ContentTemplates/MenusTemplate"
import Modals from "../components/ContentTemplates/ModalsTemplate"
import Navigation from "../components/ContentTemplates/NavigationTemplate"
import Tables from "../components/ContentTemplates/TablesTemplate"
import Video from "../components/ContentTemplates/VideoTemplate"
import Pagination from "../components/ContentTemplates/PaginationTemplate"

interface IProps {
	page: string
}

const ContentPage: NextPage = (props) => {
	const { page } = props as IProps
	const title = capitalizeRoute(page)

	return (
		<>
			<Head>
				<title>{`${title} - Accessible Web Dev`}</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Layout headerTitle={`Accessible ${title}`} activeNavLink={`/${page}`}>
				<>
					{page === "alerts" && <Alerts />}
					{page === "animations" && <Animations />}
					{page === "audio" && <Audio />}
					{page === "breadcrumbs" && <Breadcrumbs />}
					{page === "buttons" && <Buttons />}
					{page === "captchas" && <Captchas />}
					{page === "charts" && <Charts />}
					{page === "forms" && <Forms />}
					{page === "headings" && <Headings />}
					{page === "icons" && <Icons />}
					{page === "images" && <Images />}
					{page === "links" && <Links />}
					{page === "lists" && <Lists />}
					{page === "menus" && <Menus />}
					{page === "modals" && <Modals />}
					{page === "navigation" && <Navigation />}
					{page === "pagination" && <Pagination />}
					{page === "tables" && <Tables />}
					{page === "video" && <Video />}
				</>
			</Layout>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = pages
		.filter((page) => page.content)
		.map((page) => ({
			params: { content: page.content },
		}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const content = context.params!.content

	return {
		props: {
			page: content,
		},
	}
}

export default ContentPage
