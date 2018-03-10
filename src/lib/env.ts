import { keyblade } from 'keyblade'
import * as yenv from 'yenv'

import { logger } from './logger'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export const env = yenv('env.yaml')
