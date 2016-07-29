###
# Page options, layouts, aliases and proxies
###

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'images'
set :layouts_dir, 'layouts'

# Per-page layout changes:
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  # Reload the browser automatically whenever files change
  activate :livereload
  # webpack setting
  activate :external_pipeline,
    name: :webpack,
    command: 'npm run js:dev',
    source: ".tmp/dist",
    latency: 0.5
  # gulp setting
  activate :external_pipeline,
    name: :gulp,
    command: 'npm run watch',
    source: ".tmp/dist",
    latency: 0.5
end

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do

  # "Ignore" JS so webpack has full control.
  # ignore { |path| path =~ /\/(.*)\.js$/ && $1 != 'all' }

  ignore 'assets/css/*'
  ignore 'assets/js/*'
  ignore 'assets/images/_sprite/*'

  # after build task gulp or npm run scripts
  after_build do
    system('npm run build')
  end

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster 
  # activate :asset_hash

  # Use relative URLs / to relative paths (not links)
  # activate :relative_assets

  # link_to helper transfer to relative path
  # config[:relative_links] = true

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

# configure :server do
#   ready do
#     files.on_change :source do |changed|
#       changed_js = changed.select do |f|
#         f[:full_path].extname === '.js' && !f[:full_path].to_s.include?('.tmp')
#       end

#       if changed_js.length > 0
#         puts "== Linting Javascript"
#         puts `./node_modules/eslint/bin/eslint.js #{changed_js.map { |js| js[:full_path].relative_path_from(app.root_path).to_s }.join(' ')}`
#       end
#     end
#   end
# end
