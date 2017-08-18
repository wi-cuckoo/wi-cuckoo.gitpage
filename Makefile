.PHONY: copy generate gitpush deploy

copy:
	# rsync -rtvuc ./dist/ ../deploy/
	rsync -rlpcgoDvzi --delete ./dist/ ../deploy/ --exclude-from 'exclude-list.txt'
	

gitpush:
	cd ../deploy/ ;git add . ; git commit -am "deploy"; git push -u origin master; cd -

generate:
	npm run generate

deploy: generate copy gitpush

updatemediumfeed:
	curl "https://medium.com/feed/@robertodev" > static/lastmediumfeed.xml