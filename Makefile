db-connect:
	psql postgres://$(DB_USERNAME):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE) -P format=wrapped -P expanded=auto